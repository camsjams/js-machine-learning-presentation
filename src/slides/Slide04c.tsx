import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import {
	Text,

	// @ts-ignore
	TableHeader, TableBody, TableCell, TableRow
} from 'spectacle';
import AdvancedMultiplication from '../components/AdvancedMultiplication';
import FixedTable from '../components/FixedTable';

type Props = {
	step: number;
}

const Code = styled.code`
	color: var(--code-color);
	background-color: var(--code-bg-color);
	padding: 0 0.2em;
`;

const StyledTableCell = styled(TableCell)`
	text-align: right;
	font-size: .7em;
`;

const StyledInputTableCell = styled(StyledTableCell)`
	width: 50%;
`;

const SlideComponent: FC<Props> = ({step}) =>
	<Fragment>
		{step < 1 && <Text>What if we didn&apos;t know that <Code>Input</Code> was multiplied by a value?</Text>}
		{step === 0 &&
			<FixedTable className={`reveal-${step}`}>
				<TableHeader>
					<TableRow>
						<StyledInputTableCell>Input</StyledInputTableCell>
						<StyledTableCell>Result</StyledTableCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<StyledTableCell>3.2</StyledTableCell>
						<StyledTableCell>16.16</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell>4.73</StyledTableCell>
						<StyledTableCell>23.8865</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell>7</StyledTableCell>
						<StyledTableCell>35.35</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell>98</StyledTableCell>
						<StyledTableCell>494.9</StyledTableCell>
					</TableRow>
				</TableBody>
			</FixedTable>}
		{
			step > 0 ?
				<AdvancedMultiplication step={step} /> :
				null
		}
	</Fragment>;

export default SlideComponent;
