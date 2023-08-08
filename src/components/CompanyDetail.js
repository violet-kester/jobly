import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JoblyApi from '../api';
import JobCardList from './JobCardList';
import CompanyCard from './CompanyCard';
import { Box, Divider, Typography } from '@mui/material';
import StyledTypography from './Typography/Typography';


/** CompanyDetail for details and jobs from a single company.

 * Props: N/A
 * State: N/A
 *
 * RoutesList -> CompanyDetail
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });

  /** Gets company from API on mount and on handle change */
  useEffect(function getCompanyFromAPIOnMount() {
    async function waitForCompany() {
      const result = await JoblyApi.getCompany(handle);
      setCompany({ data: result, isLoading: false });
    }
    waitForCompany();
  }, [handle]);

  if (company.isLoading) {
    return <StyledTypography variant='h6'>
      Loading company...
    </StyledTypography>;
  }

  return (
    <Box>

      <CompanyCard company={company.data} />

      <Box mt={3} mb={2}>
        <Divider variant="middle" />
        <StyledTypography variant="caption">
          Posted jobs
        </StyledTypography>
      </Box>

      <JobCardList jobs={company.data.jobs} />

    </Box>
  );
}

export default CompanyDetail;