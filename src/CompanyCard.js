import "./CompanyCard.css";
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography} from '@mui/material';

/** CompanyCard component
 *
 * Card displaying details on a single company.
 *
 * Props:
 * - company:
 *   {
 *     "handle": "anderson-arias-morrow",
 *     "name": "Anderson, Arias and Morrow",
 *     "description": "Somebody program how I...",
 *     "numEmployees": 245,
 *     "logoUrl": "/logos/logo3.png",
 *   }
 *
 * State: N/A
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {

  return (
    <Box className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <Card>
          {company.logoUrl &&
            <CardMedia
              component="img"
              image={company.logoUrl}
              sx={{
                height: 50,
                marginTop: '15px',
                objectFit: 'contain',
              }}
              m="3"
            />
          }
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                color: (theme) => theme.palette.primary.main
              }}>
              {company.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.primary.main
              }}>
              {company.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}

export default CompanyCard;