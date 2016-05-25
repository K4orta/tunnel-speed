import haversine from 'haversine';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

function timeToHrs(st, et) {
  return ((new Date(et).getTime()) - (new Date(st).getTime())) / HOUR;
}

function haversineDist(start, end) {
  return haversine({
    latitude: start.get('lat'),
    longitude: start.get('lng'),
  }, {
    latitude: end.get('lat'),
    longitude: end.get('lng'),
  }, {
    unit: 'mile',
  });
}

export default function vehicleDistance(vehicle) {
  let vs = vehicle.get('stats');
  let dist = 0;

  vs = vs.update(vs.size - 1, (v) => v.set('speed', 0));

  if (vs.size === 1) {
    return vehicle.merge({ stats: vs });
  }

  for (let i = vs.size - 1; i > 0; i -= 1) {
    const hd = haversineDist(vs.get(i - 1).get('position'), vs.get(i).get('position'));
    const stepMph = hd / timeToHrs(vs.get(i).get('time'), vs.get(i - 1).get('time'));
    vs = vs.update(i - 1, (v) => v.set('speed', stepMph));
    dist += hd;
  }

  const st = vs.last().get('time');
  const et = vs.first().get('time');

  const out = {
    startTime: st,
    endTime: et,
    distance: dist,
    speed: dist / timeToHrs(st, et),
    stats: vs,
  };

  // dist / (new Date(et)).unix() - (new Date(st)).unix()
  return vehicle.merge(out);
}
