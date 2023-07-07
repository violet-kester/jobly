import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** JoblyApi
 *
 * Static API class containing methods used to get/send to the API.
 * - No frontend-specific stuff here.
 * - No API-aware stuff elsewhere in the frontend.
 */

class JoblyApi {
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

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

  /** Login user - returns a token */
  static async loginUser(username, password) {
    let res = await this.request(
      'auth/token/',
      // TODO:
      // use object shorthand {username, password}
      { username: username, password: password },
      "post"
    );
    this.token = res.token;
    return res.token;
  }

  /** Register user - returns a token
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */

  // TODO:
  // before the object on ln. 99,
  // can destructure input so it is easier to pass in later
  static async registerUser(user) {
    let res = await this.request(
      'auth/register/',
      // TODO:
      // ask about this
      {
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      },
      "post"
    );
    this.token = res.token;

    return res;
  }

  // Company routes --------------------------------------------------

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies. */
  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** Get details on companies by name search term */
  static async getCompaniesByName(term) {
    let res = await this.request(`companies/?nameLike=${term}`);
    return res.companies;
  }

  // Job routes --------------------------------------------------------

  /** Get details on a job by id. */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get details on all jobs. */
  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Get details on jobs by title */
  static async getJobsByTitle(title) {
    let res = await this.request(`jobs/?title=${title}`);
    return res.jobs;
  }

  // User routes -----------------------------------------------------

  /** Get details on a user by username. */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}


export default JoblyApi;