import React from "react";
import App from "../src/App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

beforeAll(()=>{
  console.log('before all');
})
beforeEach(()=>{
  console.log('before each');
})

afterAll(()=>{
  console.log('after all');
})
afterEach(()=>{
  console.log('after each');
})

describe('jest test 1', () => {
  beforeAll(() => {
    console.log('before all test 1');
  })
  beforeEach(() => {
    console.log('before each test 1');
  })

  afterAll(() => {
    console.log('after all test 1');
  })
  afterEach(() => {
    console.log('after each test 1');
  })

  test("test 1 ", done => {
    console.log('test 1 doing');
    expect(1 + 1).toBe(2);
    const data: any = { x: 1 };
    data.y = 2;
    expect(data).toEqual({ x: 1, y: 2 });
    expect(1 + 2).not.toBe(4);
    function a() {
      setTimeout(() => {
        expect(3).toBe(3);
        console.log('done');
        done();
      })
    }
    a();
  });
})

describe('jest test 2', () => {
  beforeAll(() => {
    console.log('before all test 2');
  })
  beforeEach(() => {
    console.log('before each test 2');
  })

  afterAll(() => {
    console.log('after all test 2');
  })
  afterEach(() => {
    console.log('after each test 2');
  })

  test("test 2 ", done => {
    console.log('test 2 doing');
    expect(1 + 1).toBe(2);
    const data: any = { x: 1 };
    data.y = 2;
    expect(data).toEqual({ x: 1, y: 2 });
    expect(1 + 2).not.toBe(4);
    function a() {
      setTimeout(() => {
        expect(3).toBe(3);
        console.log('done');
        done();
      })
    }
    a();
  });
})
