# TSDB Model

LinDB 的field 字段提供了多种标准类型。这些类型可以通过SDK（ProtoBuf）传输。
所有原始数据在落盘时便会根据相应的类型进行聚合。对于普通用户而言，并不需要关心 Field 的具体存储形式
，相对应的转换过程都会封装在 tsdb 中

## SumField
SumField 是一个自动累计的字段，多个值在存储或查询时会根据时间区间进行自动汇总求和。
例如，SumField 可以用来记录上一个时间区间内的PV、UV、错误数等类型的数据


## GaugeField 
GaugeField 用来表示可以任意波动的值，例如当前的内存用量、CPU使用率等。

# Compound Field
从 DTO model的 复合 field 会自动转换为以下几种 field 进行存储

## HistogramField
HistogramField 是组成直方图数据的基础字段，在 SDK中打点时，对应的数据会被拆解为多个HistogramField，记录到不同的Bucket中，以支持计算99线、95线等。
HistogramField 是一种特殊的 SumField，并不会呈现给用户。

## MinField
MinField 是一个自动求最小值的字段，多个值在存储时会根据时间区间写入最小的一个值，在降采样查询时也会如此。
例如，MinField 通常作为 HistogramField 的辅助Field，也可以根据需求自主使用。

## MaxField
MaxField 是一个自动求最大值的字段，功能与 MinField 类似。