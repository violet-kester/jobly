import "./CompanyCard.css";
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

/** CompanyCard component
 *
 * Card displaying details on a single company.
 *
 * Props:
 * - company:
 *   {
 *     "handle": "anderson-arias-morrow",
 *     "name": "Anderson, Arias and Morrow",
 *     "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
 *     "numEmployees": 245,
 *     "logoUrl": "/logos/logo3.png",
 *   }
 *
 * State: N/A
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  const theme = useTheme();

  return (
    <Box className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <Card>
          {company.logoUrl &&
            <CardMedia
              component="img"
              image={company.logoUrl}
              sx={{
                height: 75,
                marginTop: '10px',
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
                color: (theme) => theme.palette.primary.dark
              }}>
              {company.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.primary.main
              }}>
              {company.description}
            </Typography>
          </CardContent>
        </Card>
        {/* {company.logoUrl &&
          <img
            className="CompanyCard-logo"
            src={company.logoUrl}
            alt={`${company.name} logo`} />
        }
        <h3 className="CompanyCard-name">{company.name}</h3>
        <p>{company.description}</p> */}
      </Link>
    </Box>
  );
}

export default CompanyCard;