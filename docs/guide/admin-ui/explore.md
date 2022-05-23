# Data Explore

Data Explore Page provides a UI-based way to query data for users who are not familiar with [Lin Query Language(LQL)](../lql.md).

- Database: the database to be queried, required;
- Namespace: Namespace to be queried, optional, default namespace will be `default-ns` when input is omitted;
- Metrics: Metrics Name to be queried, required;
- Show LQL: When switch is on, LQL will be displayed, then you can click Execute LQL and jump to [Data Search](./search.md) for more flexible data analysis;
- Metrics Area: Display the corresponding Fields/Tags and data of the selected Metrics, among which Fields/Tags are useful for further data analysis;
  - Field: required, multiple Fields are supported for querying`;
  - Filter: Filter data through Tags, optional;
  - Group By: Grouping data through Tags, optional;
  - Metric display: display result data, including the corresponding Metrics Name;
  - Query status: display status of current query in the upper right corner of the icon, such as abnormal error, query status, etc.;

<image-window>

![data explore](@images/guide/admin_ui/data_explore.png)

</image-window>