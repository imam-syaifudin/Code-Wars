function number(busStops) {
    let peoples = 0;
    busStops.forEach(val => peoples = peoples + val[0] - val[1])
    return peoples;
}
