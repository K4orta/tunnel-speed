import haversine from 'haversine';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

function timeToHrs(st, et) {
  return ((new Date(et).getTime()) - (new Date(st).getTime())) / HOUR;
}

export default function vehicleDistance(vehicle) {
  const vs = vehicle.get('stats');
  let dist = 0;
  for (let i = vs.size - 1; i > 0; i -= 1) {
    const p1 = vs.get(i - 1).get('position');
    const p2 = vs.get(i).get('position');
    const hd = haversine({
      latitude: p1.get('lat'),
      longitude: p1.get('lng'),
    }, {
      latitude: p2.get('lat'),
      longitude: p2.get('lng'),
    }, {
      unit: 'mile',
    });
    dist += hd;
  }

  const st = vs.last().get('time');
  const et = vs.first().get('time');

  const out = {
    startTime: st,
    endTime: et,
    distance: dist,
    speed: dist / timeToHrs(st, et),
  };

  // dist / (new Date(et)).unix() - (new Date(st)).unix()
  return vehicle.merge(out);
}
