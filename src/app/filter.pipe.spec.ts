import { filterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new filterPipe();
    expect(pipe).toBeTruthy();
  });
});
