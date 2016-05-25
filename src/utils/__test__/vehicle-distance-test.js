import Immutable from 'immutable';
const vehicle = Immutable.fromJS(require('./vehicle-fixture.json'));
import vehicleDistance from '../vehicle-distance';

describe('The Distance Calculation Utility', () => {
  it('has a start time', () => {
    const vStats = vehicle.get('stats');
    const firstTime = vStats.last().get('time');
    expect(vehicleDistance(vehicle).get('startTime')).to.equal(firstTime);
  });

  it('has an end time', () => {
    const vStats = vehicle.get('stats');
    const firstTime = vStats.first().get('time');
    expect(vehicleDistance(vehicle).get('endTime')).to.equal(firstTime);
  });

  it('has a distance field', () => {
    expect(vehicleDistance(vehicle).has('distance')).to.equal(true);
  });

  it('calculates the Haversine distance of all points', () => {
    expect(vehicleDistance(vehicle).get('distance')).to.equal(0.4169265417540078);
  });

  it('calculates the mph of all points', () => {
    expect(vehicleDistance(vehicle).get('speed')).to.equal(9.322581057853592);
  });

  it('sets the distance for tailing train to 0', () => {
    expect(vehicleDistance(vehicle).get('stats').last().get('distance'))
      .to.equal(0);
  });

  it('sets the distance for each segment', () => {
    expect(vehicleDistance(vehicle).get('stats').first().get('distance'))
      .to.be.gt(0);
  });
});
