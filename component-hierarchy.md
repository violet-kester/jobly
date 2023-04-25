<!-- TODO: pattern match component design names -->

**App**

  **NavBar**

  **RoutesList**

    **LandingPage**

    **CompanyList**
    -state: companyList
    -state: filter

      functions:
      - handleSearch - updates filter in state via setFilter

      **SearchForm**
      props:
      - handleSearch - update filter in state via setFilter

      state:
      - formData: search term

    **CompanyCard**
     state:
    - currCompany
    - jobs: array of jobs listed by company - from api

          **JobsList**
          props:
          - jobs: list of jobs to show

            **Job**
            props:
            - job: job data

    **JobsList**
    state:
    - jobs: list of jobs
    - filter: jobs eg. "watson"

      **SearchForm**
      props:
      - handleSearch - update filter in state via setFilter

      state:
      - formData: search term

      **JobsCardList**
      props:
      - jobs: list of jobs to show

          **Job**
            props:
            - job: job data














