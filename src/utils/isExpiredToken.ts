import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import { getTokens } from "./getTokens";
import { TokenTypes } from "../types/tokens";

export const isExpiredToken = () => {
  const tokens = getTokens();

  if (tokens) {
    const jwtAccess: TokenTypes = jwt_decode(tokens?.accessToken);
    const jwtAccessRefresh: TokenTypes = jwt_decode(tokens?.refreshToken);
    const isExpiredAccess = dayjs.unix(jwtAccess.exp).diff(dayjs()) < 1;
    const isExpiredRefresh = dayjs.unix(jwtAccessRefresh.exp).diff(dayjs()) < 1;

    return { ...tokens, isExpiredAccess, isExpiredRefresh };
  }
  return null;
};
