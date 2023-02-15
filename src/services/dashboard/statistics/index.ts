import { request } from "http/";

export const getChart = <T>(params: T) =>
  request("statistics/chart", {
    params,
  });

export const getEmployeeStatistics = <T>(params: T) =>
  request("statistics/employees", {
    params,
  });

export const getReviews = <T>(params: T) =>
  request("statistics/reviews", {
    params,
  });
