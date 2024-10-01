const shakeTree = (tree) => {
  const peanuts = tree[0];
  const place = Array(peanuts.length).fill(0);
  const areas = {};

  // Draw Area
  for (let i = 0; i < tree[0].length; i++) {
    areas[i] = tree.slice(1).map((val) => val[i]);
  }

  for (let i = 0; i < peanuts.length; i++) {
    const peanut = peanuts[i];

    if (peanut === "o") {
      let assignToPlace = i;
      let area = areas[i];

      for (let j = 0; j < area.length; j++) {
        let simbol = area[j];

        if (simbol === "_") {
          assignToPlace = false;
          break;
        }

        if (simbol === "/" ) assignToPlace = assignToPlace - 1;
        if (simbol === "\\") assignToPlace = assignToPlace + 1;

        area = areas[assignToPlace];
        
      }

      if (assignToPlace !== false) {
        place[assignToPlace] = place[assignToPlace] + 1;
      }
    }
  }

  return place;
};
