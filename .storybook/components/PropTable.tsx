import * as React from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';

const Title = styled.h3`
  padding: 12px;
`;

const Table = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  background-color: rgba(196, 196, 196, 0.2);
  border-bottom: 2px solid black;
`;

const Type = styled.span`
  color: #c41d7f;
  font-family: Consolas,"courier new";
`;

const Code = styled.code`
  margin: 0 1px;
  padding: .2em .4em;
  font-size: .9em;
  background: #f2f4f5;
  border: 1px solid #eee;
  border-radius: 3px;
`;

const TH = styled.th`
  padding: 12px;
  text-align: left;
`;

const TD = styled.td`
  padding: 12px;
  text-align: left;
`;

const TDProperty = styled(TD)`
  width: 20%;
  color: #595959;
  font-weight: 600;
  font-family: Consolas,"courier new";
`;

function getTypeName(type: string) {
  if (_.startsWith(type, 'string | number')) {
    return 'ReactText';
  }
  return type;
}

const TableComponent: React.FunctionComponent<any> = (config: any) => {
  if (config.propDefinitions.length === 0) {
    return null;
  }

  const props = config.propDefinitions.filter((p: any) => !config.excludedPropTypes.includes(p.property))
  .map(({
    property,
    propType,
    description,
    defaultValue
  }: any) => {
      return (
        <tr key={property}>
          <TDProperty>
            {property}
          </TDProperty>
          <TD>{description}</TD>
          <TD><Type>{getTypeName(propType.name)}</Type></TD>
          <TD>{(defaultValue === '' || String(defaultValue) === 'undefined') ? null : <Code>{String(defaultValue)}</Code>}</TD>
        </tr>
      );
    }
  );

  return (
    <div>
      <Title>{config.type.__docgenInfo.description || config.type.displayName} Props</Title>
      <Table>
        <THead>
          <tr>
            <TH>Property</TH>
            <TH>Description</TH>
            <TH>Type</TH>
            <TH>Default</TH>
          </tr>
        </THead>
        <tbody>{props}</tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
