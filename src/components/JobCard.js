import { Box, Card, CardContent } from '@mui/material';
import GlassBox from './Box/Box';
import StyledTypography from './Typography/Typography';

/** JobCard for information on a single job
 *
 * Props:
 * - job: [
			{
				"id": 7,
				"title": "Technical brewer",
				"salary": 157000,
				"equity": "0",
				"companyHandle": "watson-davis",
				"companyName": "Watson-Davis"
			},
		}
 *
 * State: N/A
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {

	return (
		<GlassBox>

			<Card elevation={0}>
				<CardContent sx={{
					padding: '24px'
				}}>

					<StyledTypography variant="h5" gutterBottom>
						{job.title}
					</StyledTypography>

					{job.companyName &&
						<Box>
							<StyledTypography variant="body1">
								Company: {job.companyName}
							</StyledTypography>
							<StyledTypography variant="body1">
								Salary: {Number(job.salary).toLocaleString()}
							</StyledTypography>
							<StyledTypography variant="body1">
								Equity: {job.equity}
							</StyledTypography>
						</Box>
					}

				</CardContent>
			</Card>

		</GlassBox>
	);
}

export default JobCard;