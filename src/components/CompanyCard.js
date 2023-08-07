import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import MintGlassBox from './Box/Box';

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
    <MintGlassBox>

      <Link to={`/companies/${company.handle}`}>
        <Card sx={{
          width: '100%',
        }}>
          {company.logoUrl &&
            <CardMedia
              component="img"
              image={company.logoUrl}
              sx={{
                height: 50,
                marginTop: '15px',
                objectFit: 'contain',
              }}
            />
          }
          <CardContent sx={{
            padding: '24px',
          }}>
            <Typography variant="h5" gutterBottom>
              {company.name}
            </Typography>
            <Typography variant="body1">
              {company.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>

    </MintGlassBox>
  );
}

export default CompanyCard;