import React from 'react';
import styled from 'styled-components';

const PROPTYPE_STRINGS = {
  bool: 'boolean',
  func: 'function',
  node: 'ReactNode',
  enum: 'Enum'
};

const Title = styled.h3`
  padding: 12px;
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

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(({
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
      <Title>API</Title>
      <table>
        <thead>
          <tr>
            <TH>Property</TH>
            <TH>Description</TH>
            <TH>Type</TH>
            <TH>Default</TH>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    </div>
  );
};

export default TableComponent;
