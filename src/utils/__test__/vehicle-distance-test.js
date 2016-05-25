import Immutable from 'immutable';
const vehicle = Immutable.fromJS(require('./vehicle-fixture.json'));
import vehicleDistance from '../vehicle-distance';

describe('The Distance Calculation Utility', () => {
  const fixture = vehicleDistance(vehicle);

  it('has a start time', () => {
    const vStats = vehicle.get('stats');
    const firstTime = vStats.last().get('time');
    expect(fixture.get('startTime')).to.equal(firstTime);
  });

  it('has an end time', () => {
    const vStats = vehicle.get('stats');
    const firstTime = vStats.first().get('time');
    expect(fixture.get('endTime')).to.equal(firstTime);
  });

  it('has a distance field', () => {
    expect(fixture.has('distance')).to.equal(true);
  });

  it('calculates the Haversine distance of all points', () => {
    expect(fixture.get('distance')).to.equal(0.4169265417540078);
  });

  it('calculates the mph of all points', () => {
    expect(fixture.get('speed')).to.equal(9.322581057853592);
  });

  it('sets the speed for tailing train to 0', () => {
    expect(fixture.get('stats').last().get('speed'))
      .to.equal(0);
  });

  it('sets the speed for each segment', () => {
    expect(fixture.get('stats').first().get('speed'))
      .to.be.gt(0);
  });
});
