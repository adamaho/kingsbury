import React from 'react';
import styled from 'styled-components';

const PROPTYPE_STRINGS = {
  bool: 'boolean',
  func: 'function',
  node: 'ReactNode',
  enum: 'Enum',
  string: 'string',
  union: 'union' // TODO: Make this a function that returns the proper types
};

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

const TableComponent = (config) => {
  const props = config.propDefinitions.filter((p) => !config.excludedPropTypes.includes(p.property))
  .map(({
    property,
    propType,
    description,
    defaultValue
  }) => {
      return (
        <tr key={property}>
          <TDProperty>
            {property}
          </TDProperty>
          <TD>{description}</TD>
          <TD><Type>{PROPTYPE_STRINGS[propType.name]}</Type></TD>
          <TD><Code>{defaultValue}</Code></TD>
        </tr>
      );
    }
  );

  return (
    <div>
      <Title>{config.type.__docgenInfo.description || config.type.displayName}</Title>
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
