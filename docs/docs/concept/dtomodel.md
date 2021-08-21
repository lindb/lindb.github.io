# DTO Model

```protobuf

message MetricList {
    repeated Metric metrics = 2;
}

message Metric {
    string namespace = 1;
    string name = 2;
    int64 timestamp = 3;
    repeated KeyValue tags = 4;
    // xxhash.Sum64String(tags), broker side generate before write wal
    uint64 tags_hash = 5;
    repeated SimpleField simple_fields = 6;
    CompoundField compound_field = 7;
}

enum SimpleFieldType {
    SIMPLE_UNSPECIFIED = 0;
    GAUGE = 1;
    DELTA_SUM = 2;
    CUMULATIVE_SUM = 3;
}

enum CompoundFieldType {
    COMPOUND_UNSPECIFIED = 0;
    DELTA_HISTOGRAM = 1;
    CUMULATIVE_HISTOGRAM = 2;
}

message SimpleField {
    string name = 1;
    SimpleFieldType type = 2;
    repeated Exemplar exemplars = 3;
    double value = 4;
}

// CompoundData is compound data used for histogram field.
message CompoundField {
    CompoundFieldType type = 1;
    repeated Exemplar exemplars = 2;
    double min = 3;
    double max = 4;
    double sum = 5;
    double count = 6;
    // same as open-telemetry metrics definition
    // explicit_bounds specifies buckets with explicitly defined bounds for values.
    //
    // The boundaries for bucket at index i are:
    //
    // (-infinity, explicit_bounds[i]] for i == 0
    // (explicit_bounds[i-1], explicit_bounds[i]] for 0 < i < size(explicit_bounds)
    // (explicit_bounds[i-1], +infinity) for i == size(explicit_bounds)
    //
    // The values in the explicit_bounds array must be strictly increasing.
    //
    // Histogram buckets are inclusive of their upper boundary, except the last
    // bucket where the boundary is at infinity. This format is intentionally
    // compatible with the OpenMetrics histogram definition.
    repeated double explicit_bounds = 7;
    repeated double values = 8;
}


```