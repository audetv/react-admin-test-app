import * as React from 'react';
import { UrlFieldProps, useRecordContext } from 'react-admin';

const MyUrlField = (props: UrlFieldProps) => {
  const {source} = props;
  const record = useRecordContext();

  return source && record ? (
      <a href={record[source]}>
        {record[source]}
      </a>
  ) : null;
}

export default MyUrlField;
