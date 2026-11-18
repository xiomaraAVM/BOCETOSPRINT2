
(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const search = $('#project-search');
  const cards = $$('.project-card');
  const empty = $('#empty-state');
  const count = $('#result-count');
  let selectedRegion = 'Todas';

  function filterProjects() {
    if (!cards.length) return;

    const needle = (search?.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const matchesRegion =
        selectedRegion === 'Todas' ||
        card.dataset.region === selectedRegion;

      const matchesSearch =
        !needle ||
        (card.dataset.search || '').toLowerCase().includes(needle);

      const show = matchesRegion && matchesSearch;
      card.hidden = !show;

      if (show) visible += 1;
    });

    if (count) count.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;
  }

  search?.addEventListener('input', filterProjects);

  $$('[data-region-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedRegion = button.dataset.regionFilter || 'Todas';

      $$('[data-region-filter]').forEach((item) => {
        item.classList.toggle('active', item === button);
      });

      filterProjects();
    });
  });

  $$('.map-pin').forEach((pin) => {
    pin.addEventListener('click', () => {
      $$('.map-pin').forEach((item) => {
        item.classList.remove('selected');
      });

      pin.classList.add('selected');

      const popup = $('#map-popup');

      if (popup && pin.dataset.project === 'ramon') {
        popup.classList.add('visible');
      }
    });
  });

  const tabs = $$('.tab');
  const panels = $$('.tab-panel');
  const title = $('[data-panel-title]');

  const panelTitles = {
    profile: 'Indicadores demográficos de la población',
    context: 'Una ciudad para quedarse',
  };

  function selectTab(name) {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.tab === name);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === name);
    });

    $$('[data-tab-target]').forEach((metric) => {
      metric.classList.toggle('active', metric.dataset.tabTarget === name);
    });

    if (title) {
      title.textContent = panelTitles[name] || panelTitles.access || '';
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => selectTab(tab.dataset.tab));
  });

  $$('[data-tab-target]').forEach((metric) => {
    metric.addEventListener('click', () => {
      selectTab(metric.dataset.tabTarget);
    });
  });

  $$('[data-equipment]').forEach((filter) => {
    filter.addEventListener('click', () => {
      const type = filter.dataset.equipment;

      $$('[data-equipment]').forEach((item) => {
        item.classList.toggle('active', item === filter);
      });

      $$('[data-equipment-item]').forEach((item) => {
        item.hidden =
          type !== 'Todos' && item.dataset.equipmentItem !== type;
      });
    });
  });

  $$('.layer').forEach((layer) => {
    layer.addEventListener('click', () => {
      layer.classList.toggle('active');
    });
  });

  $$('[data-action="toggle-filters"]').forEach((button) => {
    button.addEventListener('click', () => {
      $('#region-filters')?.classList.toggle('show-mobile');
    });
  });

  $$('[data-action="export"]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  $$('[data-action="methodology"]').forEach((button) => {
    button.addEventListener('click', () => {
      window.alert(
        'La isocrona representa el área alcanzable caminando durante 15 minutos a una velocidad promedio de 4,5 km/h.'
      );
    });
  });
})();
