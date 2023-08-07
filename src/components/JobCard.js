import { Box, Card, CardContent, Typography } from '@mui/material';
import MintGlassBox from './Box/Box';

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
		<MintGlassBox>

			<Card>
				<CardContent sx={{
					padding: '24px'
				}}>

					<Typography variant="h5" gutterBottom>
						{job.title}
					</Typography>

					{job.companyName &&
						<Box>
							<Typography variant="body1">
								Company: {job.companyName}
							</Typography>
							<Typography variant="body1">
								Salary: {Number(job.salary).toLocaleString()}
							</Typography>
							<Typography variant="body1">
								Equity: {job.equity}
							</Typography>
						</Box>
					}

				</CardContent>
			</Card>

		</MintGlassBox>
	);
}

export default JobCard;