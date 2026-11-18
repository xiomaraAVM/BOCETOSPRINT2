"use strict";

const communeSelect = document.querySelector("#commune-select");
const searchInput = document.querySelector("#record-search");
const resultsTitle = document.querySelector("#results-title");
const resultsSubtitle = document.querySelector("#results-sub");
const resultsCount = document.querySelector("#results-count");
const recordsContainer = document.querySelector("#records");
const emptyState = document.querySelector("#empty-state");
const emptyIcon = document.querySelector("#empty-icon");
const emptyTitle = document.querySelector("#empty-title");
const emptyDescription = document.querySelector("#empty-description");
const totalRecords = document.querySelector("#total-records");
const totalLabel = document.querySelector("#total-label");
const demographicsPanel = document.querySelector("#demographics-panel"); // CONTENEDOR DEMOGRÁFICO

const icons = {
  building: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
};

let directory = {};
let selectedCommune = "";
let searchTerm = "";

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLocaleLowerCase("es-CL")
    .trim();
}


function isValidPhone(value) {
  if (!value) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 12;
}

function showEmptyState(title, description, iconMarkup = icons.building) {
  emptyIcon.innerHTML = iconMarkup;
  emptyTitle.textContent = title;
  emptyDescription.textContent = description;
  emptyState.hidden = false;
  recordsContainer.hidden = true;
}

function createDetailLine(label, value, testId) {
  const line = document.createElement("div");
  line.className = "detail-line";
  line.dataset.testid = testId;
  const labelElement = document.createElement("span");
  labelElement.textContent = label;
  line.append(labelElement, value);
  return line;
}

function createRecordCard(record, index) {
  const id = String(record.id ?? "");
  const testSuffix = `${id || "sin-id"}-${index}`;
  const name = String(record.n ?? "").trim();
  const address = String(record.d ?? "").trim();
  const phone = String(record.t ?? "").trim();
  const capacity = String(record.c ?? "").trim();
  const fichaUrl = String(record.ficha ?? "").trim();

  const article = document.createElement("article");
  article.className = "record";
  article.dataset.testid = `card-establecimiento-${testSuffix}`;

  const main = document.createElement("div");
  const heading = document.createElement("h3");
  heading.className = "record-name";
  heading.dataset.testid = `text-nombre-${testSuffix}`;
  heading.textContent = name || "Nombre no informado";
  if (!name) heading.classList.add("missing");

  const addressLine = document.createElement("p");
  addressLine.className = "record-address";
  addressLine.dataset.testid = `text-direccion-${testSuffix}`;
  addressLine.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  const addressText = document.createElement("span");
  addressText.textContent = address || "Dirección no informada";
  if (!address) addressText.className = "missing";
  addressLine.append(addressText);
  main.append(heading, addressLine);

  const details = document.createElement("div");
  details.className = "record-detail";

  const capacityValue = document.createElement("span");
  capacityValue.className = `detail-value${capacity ? "" : " missing"}`;
  if (capacity && Number.isFinite(Number(capacity))) {
    capacityValue.textContent = Number(capacity).toLocaleString("es-CL");
  } else {
    capacityValue.textContent = "No informado";
    capacityValue.classList.add("missing");
  }
  details.append(createDetailLine("Camas registradas", capacityValue, `detail-camas-${testSuffix}`));

  const idValue = document.createElement("span");
  idValue.className = `detail-value${id ? "" : " missing"}`;
  idValue.textContent = id || "No informado";
  details.append(createDetailLine("ID del registro", idValue, `detail-identificador-${testSuffix}`));

  let phoneValue;
  if (isValidPhone(phone)) {
    phoneValue = document.createElement("a");
    phoneValue.className = "detail-value phone-link";
    phoneValue.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
    phoneValue.dataset.testid = `link-telefono-${testSuffix}`;
    phoneValue.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z"/></svg>';
    const phoneText = document.createElement("span");
    phoneText.textContent = phone;
    phoneValue.append(phoneText);
  } else {
    phoneValue = document.createElement("span");
    phoneValue.className = `detail-value${phone ? "" : " missing"}`;
    phoneValue.textContent = phone || "No informado";
  }
  details.append(createDetailLine("Teléfono", phoneValue, `detail-telefono-${testSuffix}`));

  // Enlace directo a la ficha territorial
  let fichaAction;
  if (fichaUrl) {
    fichaAction = document.createElement("a");
    fichaAction.className = "btn-back";
    fichaAction.style.marginTop = "8px";
    fichaAction.href = fichaUrl;
    fichaAction.textContent = "Ver ficha territorial →";
  } else {
    fichaAction = document.createElement("span");
    fichaAction.className = "detail-value missing";
    fichaAction.textContent = "Ficha en proceso";
  }
  details.append(createDetailLine("Ficha territorial", fichaAction, `detail-ficha-${testSuffix}`));

  article.append(main, details);
  return article;
}

function updateResults() {
  const communeRecords = selectedCommune
    ? directory[selectedCommune] ?? []
    : [];
  const normalizedTerm = normalize(searchTerm);
  const filteredRecords = normalizedTerm
    ? communeRecords.filter((record) =>
        [record.n, record.d, record.t, record.id].some((value) =>
          normalize(value).includes(normalizedTerm),
        ),
      )
    : communeRecords;

  resultsTitle.textContent = selectedCommune || "Directorio por comuna";
  resultsSubtitle.textContent = selectedCommune
    ? "Establecimientos registrados en esta comuna"
    : "Seleccione una comuna para consultar sus establecimientos";

  if (!selectedCommune) {
    resultsCount.hidden = true;
    if (demographicsPanel) demographicsPanel.hidden = true;
    showEmptyState(
      "Comience por elegir una comuna",
      "Use el selector para consultar los establecimientos y la información disponible en cada registro.",
    );
    return;
  }

  resultsCount.hidden = false;
  resultsCount.textContent = `${filteredRecords.length} ${
    filteredRecords.length === 1 ? "resultado" : "resultados"
  }`;

  if (communeRecords.length === 0) {
    if (demographicsPanel) demographicsPanel.hidden = true;
    showEmptyState(
      "Sin establecimientos registrados",
      "No hay establecimientos para mostrar en esta comuna.",
    );
    return;
  }

  if (filteredRecords.length === 0) {
    if (demographicsPanel) demographicsPanel.hidden = false;
    showEmptyState(
      "No encontramos coincidencias",
      "Pruebe con otro nombre, dirección, teléfono o identificador.",
      icons.search,
    );
    return;
  }

  emptyState.hidden = true;
  if (demographicsPanel) demographicsPanel.hidden = false;
  recordsContainer.hidden = false;
  recordsContainer.replaceChildren(
    ...filteredRecords.map(createRecordCard),
  );
}

function handleDataError() {
  communeSelect.disabled = true;
  searchInput.disabled = true;
  totalRecords.textContent = "—";
  totalLabel.textContent = "registros disponibles";
  resultsTitle.textContent = "No se pudo cargar el directorio";
  resultsSubtitle.textContent = "Revise que los archivos mantengan su estructura";
  resultsCount.hidden = true;
  showEmptyState(
    "No se pudieron cargar los datos",
    "Mantenga la carpeta data junto a index.html y abra el directorio desde un servidor local.",
  );
}

communeSelect.addEventListener("change", (event) => {
  selectedCommune = event.target.value;
  searchTerm = "";
  searchInput.value = "";
  searchInput.disabled = !selectedCommune;
  searchInput.placeholder = selectedCommune
    ? "Nombre, dirección o teléfono"
    : "Primero seleccione una comuna";
  updateResults();
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  updateResults();
});

// NUEVA FUNCION SINCRONICA PARA LOCAL
function loadDirectory() {
  try {
    if (!eleamData || Array.isArray(eleamData) || typeof eleamData !== "object") {
      throw new Error("El archivo de datos no tiene el formato esperado.");
    }

    directory = eleamData;
    const municipalities = Object.keys(directory).sort((a, b) =>
      a.localeCompare(b, "es"),
    );
    const recordCount = Object.values(directory).reduce(
      (sum, records) => sum + (Array.isArray(records) ? records.length : 0),
      0,
    );

    const options = document.createDocumentFragment();
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Elegir comuna";
    options.append(placeholder);

    municipalities.forEach((municipality) => {
      const option = document.createElement("option");
      option.value = municipality;
      option.textContent = municipality;
      options.append(option);
    });

    communeSelect.replaceChildren(options);
    communeSelect.disabled = false;
    totalRecords.textContent = recordCount.toLocaleString("es-CL");
    totalLabel.textContent = `registros en ${municipalities.length} comunas`;
    updateResults();
  } catch (error) {
    console.error("Error al cargar el directorio ELEAM:", error);
    handleDataError();
  }
}

loadDirectory();
