function number(busStops) {
    let peoples = 0;
    busStops.forEach(val => peoples = peoples + val[0] - val[1])
    return peoples;
}

console.log(number([[10,0],[3,5],[5,8]]));