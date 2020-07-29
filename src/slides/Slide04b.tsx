import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import {
	Text,

	// @ts-ignore
	TableHeader, TableBody, TableCell, TableRow
} from 'spectacle';
import BasicMultiplication from '../components/BasicMultiplication';
import FixedTable from '../components/FixedTable';

type Props = {
	step: number;
}

const StyledTable = styled(FixedTable)`

	td:nth-child(2) {
		display: none;
	}

	&.reveal-1 td:nth-child(2) {
		display: table-cell;
	}
`;

const StyledTableCell = styled(TableCell)`
	text-align: right;
	font-size: .7em;
`;

const StyledAnswerCell = styled(StyledTableCell)`
	color: var(--learning);
`;

const StyledInputTableCell = styled(StyledTableCell)`
	width: 50%;
`;

const Code = styled.code`
	color: var(--code-color);
	background-color: var(--code-bg-color);
	padding: 0 0.2em;
`;

const SlideComponent: FC<Props> = ({step}) =>
	<Fragment>
		{
			step < 2 ?
				<StyledTable className={`reveal-${step}`}>
					<TableHeader>
						<TableRow>
							<StyledInputTableCell>Input</StyledInputTableCell>
							<StyledAnswerCell>Operation</StyledAnswerCell>
							<StyledTableCell>Result</StyledTableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<StyledTableCell>3</StyledTableCell>
							<StyledAnswerCell>× 3 =</StyledAnswerCell>
							<StyledTableCell>9</StyledTableCell>
						</TableRow>
						<TableRow>
							<StyledTableCell>15</StyledTableCell>
							<StyledAnswerCell>× 3 =</StyledAnswerCell>
							<StyledTableCell>45</StyledTableCell>
						</TableRow>
						<TableRow>
							<StyledTableCell>7</StyledTableCell>
							<StyledAnswerCell>× 3 =</StyledAnswerCell>
							<StyledTableCell>21</StyledTableCell>
						</TableRow>
						<TableRow>
							<StyledTableCell>34</StyledTableCell>
							<StyledAnswerCell>× 3 =</StyledAnswerCell>
							<StyledTableCell>102</StyledTableCell>
						</TableRow>
					</TableBody>
				</StyledTable> :
				null
		}
		{
			step === 0 || step === 1 ?
				<Text>What operation are we using to get from <Code>Input</Code> to <Code>Result</Code>?</Text> :
				null
		}
		{
			step === 1 ?
				<Text>
					Multiply by 3!
					<pre>Input × 3 = Result</pre>
				</Text> :
				null
		}
		{
			step >= 2 ?
				<BasicMultiplication step={step} /> :
				null
		}
	</Fragment>;

export default SlideComponent;
