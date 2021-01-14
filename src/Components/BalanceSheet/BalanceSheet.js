import React from 'react';

const BalanceSheet = () => {
	return (
			<div class="row">
				<div class="col-md-12">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>
									#
								</th>
								<th>
									Date
								</th>
								<th>
									Account
								</th>
								<th>
									Debit
								</th>
								<th>
									Credit
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									1
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									01/04/2012
								</td>
								<td>
									Default
								</td>
							</tr>
							<tr class="table-active">
								<td>
									1
								</td>
								<td>
									01/04/2012
								</td>
								<td>
									Payroll
								</td>
								<td>
									+$500
								</td>
								<td>
								-$500
								</td>
							</tr>
							<tr class="table-success">
								<td>
									2
								</td>
								<td>
									02/04/2012
								</td>
								<td>
									Manitance
								</td>
								<td>
									-$12000
								</td>
								<td>
									+$12000
								</td>
							</tr>
							<tr class="table-warning">
								<td>
									3
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									03/04/2012
								</td>
								<td>
									Pending
								</td>
							</tr>
							<tr class="table-danger">
								<td>
									4
								</td>
								<td>
									TB - Monthly
								</td>
								<td>
									04/04/2012
								</td>
								<td>
									Call in to confirm
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	)
}

export default BalanceSheet;