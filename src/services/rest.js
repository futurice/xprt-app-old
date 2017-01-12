//import "isomorphic-fetch";
import reduxApi, { transformers } from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";

const apiRoot = 'http://localhost:3888';

// Endpoint configurations
const rest = reduxApi({
  lectures: {
    url: `${apiRoot}/lectures`,
    transformer: transformers.array
  },
  experts: {
    url: `${apiRoot}/experts`,
    transformer: transformers.array
  }
}).use("fetch", adapterFetch(fetch));

export default rest;
