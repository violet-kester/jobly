import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** JoblyApi
 *
 * Static API class containing methods used to get/send to the API.
 */

class JoblyApi {
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI" +
    "6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5MTQ3MDU2Mn0." +
    "3ZukA6FA0tHkzIdrJdsmxrxwZiF7xwzomqL5pkMBql8";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Auth routes -----------------------------------------------------

  /** loginUser(username, password) - returns a token */

  static async loginUser(username, password) {
    let res = await this.request(
      'auth/token/',
      { username, password },
      "post"
    );
    this.token = res.token;
    return res.token;
  }

  // Company routes --------------------------------------------------

  /** getCompany(handle) - get details on a company by handle */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** getCompanies() - get details on all companies */

  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** getCompaniesByName(term) - get companies by name search term */

  static async getCompaniesByName(term) {
    let res = await this.request(`companies/?nameLike=${term}`);
    return res.companies;
  }

  // Job routes --------------------------------------------------------

  /** getJob(id) - get details on a job by id */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** getJobs() - get details on all jobs. */

  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** getJobsByTitle(title) - get jobs by title */

  static async getJobsByTitle(title) {
    let res = await this.request(`jobs/?title=${title}`);
    return res.jobs;
  }

  // User routes -----------------------------------------------------

  /** registerUser(user) - returns a token
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */

  static async registerUser(userData) {
    let res = await this.request(
      'auth/register/',
      userData,
      "post"
    );
    this.token = res.token;

    return res;
  }

  /** getUser(username) - get details on a user */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // TODO: write an updateUser method
}


export default JoblyApi;