import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RevenueRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$RevenueRecordPayload>;
export type AggregateRevenueRecord = {
    _count: RevenueRecordCountAggregateOutputType | null;
    _avg: RevenueRecordAvgAggregateOutputType | null;
    _sum: RevenueRecordSumAggregateOutputType | null;
    _min: RevenueRecordMinAggregateOutputType | null;
    _max: RevenueRecordMaxAggregateOutputType | null;
};
export type RevenueRecordAvgAggregateOutputType = {
    amount: number | null;
};
export type RevenueRecordSumAggregateOutputType = {
    amount: number | null;
};
export type RevenueRecordMinAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    category: string | null;
    amount: number | null;
    description: string | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RevenueRecordMaxAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    category: string | null;
    amount: number | null;
    description: string | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RevenueRecordCountAggregateOutputType = {
    id: number;
    clinicId: number;
    category: number;
    amount: number;
    description: number;
    date: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RevenueRecordAvgAggregateInputType = {
    amount?: true;
};
export type RevenueRecordSumAggregateInputType = {
    amount?: true;
};
export type RevenueRecordMinAggregateInputType = {
    id?: true;
    clinicId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RevenueRecordMaxAggregateInputType = {
    id?: true;
    clinicId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RevenueRecordCountAggregateInputType = {
    id?: true;
    clinicId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RevenueRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevenueRecordWhereInput;
    orderBy?: Prisma.RevenueRecordOrderByWithRelationInput | Prisma.RevenueRecordOrderByWithRelationInput[];
    cursor?: Prisma.RevenueRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RevenueRecordCountAggregateInputType;
    _avg?: RevenueRecordAvgAggregateInputType;
    _sum?: RevenueRecordSumAggregateInputType;
    _min?: RevenueRecordMinAggregateInputType;
    _max?: RevenueRecordMaxAggregateInputType;
};
export type GetRevenueRecordAggregateType<T extends RevenueRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateRevenueRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRevenueRecord[P]> : Prisma.GetScalarType<T[P], AggregateRevenueRecord[P]>;
};
export type RevenueRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevenueRecordWhereInput;
    orderBy?: Prisma.RevenueRecordOrderByWithAggregationInput | Prisma.RevenueRecordOrderByWithAggregationInput[];
    by: Prisma.RevenueRecordScalarFieldEnum[] | Prisma.RevenueRecordScalarFieldEnum;
    having?: Prisma.RevenueRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RevenueRecordCountAggregateInputType | true;
    _avg?: RevenueRecordAvgAggregateInputType;
    _sum?: RevenueRecordSumAggregateInputType;
    _min?: RevenueRecordMinAggregateInputType;
    _max?: RevenueRecordMaxAggregateInputType;
};
export type RevenueRecordGroupByOutputType = {
    id: string;
    clinicId: string;
    category: string;
    amount: number;
    description: string | null;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: RevenueRecordCountAggregateOutputType | null;
    _avg: RevenueRecordAvgAggregateOutputType | null;
    _sum: RevenueRecordSumAggregateOutputType | null;
    _min: RevenueRecordMinAggregateOutputType | null;
    _max: RevenueRecordMaxAggregateOutputType | null;
};
type GetRevenueRecordGroupByPayload<T extends RevenueRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RevenueRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RevenueRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RevenueRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RevenueRecordGroupByOutputType[P]>;
}>>;
export type RevenueRecordWhereInput = {
    AND?: Prisma.RevenueRecordWhereInput | Prisma.RevenueRecordWhereInput[];
    OR?: Prisma.RevenueRecordWhereInput[];
    NOT?: Prisma.RevenueRecordWhereInput | Prisma.RevenueRecordWhereInput[];
    id?: Prisma.StringFilter<"RevenueRecord"> | string;
    clinicId?: Prisma.StringFilter<"RevenueRecord"> | string;
    category?: Prisma.StringFilter<"RevenueRecord"> | string;
    amount?: Prisma.FloatFilter<"RevenueRecord"> | number;
    description?: Prisma.StringNullableFilter<"RevenueRecord"> | string | null;
    date?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
};
export type RevenueRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clinic?: Prisma.ClinicOrderByWithRelationInput;
};
export type RevenueRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RevenueRecordWhereInput | Prisma.RevenueRecordWhereInput[];
    OR?: Prisma.RevenueRecordWhereInput[];
    NOT?: Prisma.RevenueRecordWhereInput | Prisma.RevenueRecordWhereInput[];
    clinicId?: Prisma.StringFilter<"RevenueRecord"> | string;
    category?: Prisma.StringFilter<"RevenueRecord"> | string;
    amount?: Prisma.FloatFilter<"RevenueRecord"> | number;
    description?: Prisma.StringNullableFilter<"RevenueRecord"> | string | null;
    date?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
}, "id">;
export type RevenueRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RevenueRecordCountOrderByAggregateInput;
    _avg?: Prisma.RevenueRecordAvgOrderByAggregateInput;
    _max?: Prisma.RevenueRecordMaxOrderByAggregateInput;
    _min?: Prisma.RevenueRecordMinOrderByAggregateInput;
    _sum?: Prisma.RevenueRecordSumOrderByAggregateInput;
};
export type RevenueRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.RevenueRecordScalarWhereWithAggregatesInput | Prisma.RevenueRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.RevenueRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RevenueRecordScalarWhereWithAggregatesInput | Prisma.RevenueRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RevenueRecord"> | string;
    clinicId?: Prisma.StringWithAggregatesFilter<"RevenueRecord"> | string;
    category?: Prisma.StringWithAggregatesFilter<"RevenueRecord"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"RevenueRecord"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"RevenueRecord"> | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RevenueRecord"> | Date | string;
};
export type RevenueRecordCreateInput = {
    id?: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutRevenuesInput;
};
export type RevenueRecordUncheckedCreateInput = {
    id?: string;
    clinicId: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RevenueRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutRevenuesNestedInput;
};
export type RevenueRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordCreateManyInput = {
    id?: string;
    clinicId: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RevenueRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordListRelationFilter = {
    every?: Prisma.RevenueRecordWhereInput;
    some?: Prisma.RevenueRecordWhereInput;
    none?: Prisma.RevenueRecordWhereInput;
};
export type RevenueRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RevenueRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RevenueRecordAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RevenueRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RevenueRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RevenueRecordSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RevenueRecordCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput> | Prisma.RevenueRecordCreateWithoutClinicInput[] | Prisma.RevenueRecordUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.RevenueRecordCreateOrConnectWithoutClinicInput | Prisma.RevenueRecordCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.RevenueRecordCreateManyClinicInputEnvelope;
    connect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
};
export type RevenueRecordUncheckedCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput> | Prisma.RevenueRecordCreateWithoutClinicInput[] | Prisma.RevenueRecordUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.RevenueRecordCreateOrConnectWithoutClinicInput | Prisma.RevenueRecordCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.RevenueRecordCreateManyClinicInputEnvelope;
    connect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
};
export type RevenueRecordUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput> | Prisma.RevenueRecordCreateWithoutClinicInput[] | Prisma.RevenueRecordUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.RevenueRecordCreateOrConnectWithoutClinicInput | Prisma.RevenueRecordCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.RevenueRecordUpsertWithWhereUniqueWithoutClinicInput | Prisma.RevenueRecordUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.RevenueRecordCreateManyClinicInputEnvelope;
    set?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    disconnect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    delete?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    connect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    update?: Prisma.RevenueRecordUpdateWithWhereUniqueWithoutClinicInput | Prisma.RevenueRecordUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.RevenueRecordUpdateManyWithWhereWithoutClinicInput | Prisma.RevenueRecordUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.RevenueRecordScalarWhereInput | Prisma.RevenueRecordScalarWhereInput[];
};
export type RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput> | Prisma.RevenueRecordCreateWithoutClinicInput[] | Prisma.RevenueRecordUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.RevenueRecordCreateOrConnectWithoutClinicInput | Prisma.RevenueRecordCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.RevenueRecordUpsertWithWhereUniqueWithoutClinicInput | Prisma.RevenueRecordUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.RevenueRecordCreateManyClinicInputEnvelope;
    set?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    disconnect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    delete?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    connect?: Prisma.RevenueRecordWhereUniqueInput | Prisma.RevenueRecordWhereUniqueInput[];
    update?: Prisma.RevenueRecordUpdateWithWhereUniqueWithoutClinicInput | Prisma.RevenueRecordUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.RevenueRecordUpdateManyWithWhereWithoutClinicInput | Prisma.RevenueRecordUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.RevenueRecordScalarWhereInput | Prisma.RevenueRecordScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RevenueRecordCreateWithoutClinicInput = {
    id?: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RevenueRecordUncheckedCreateWithoutClinicInput = {
    id?: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RevenueRecordCreateOrConnectWithoutClinicInput = {
    where: Prisma.RevenueRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput>;
};
export type RevenueRecordCreateManyClinicInputEnvelope = {
    data: Prisma.RevenueRecordCreateManyClinicInput | Prisma.RevenueRecordCreateManyClinicInput[];
    skipDuplicates?: boolean;
};
export type RevenueRecordUpsertWithWhereUniqueWithoutClinicInput = {
    where: Prisma.RevenueRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.RevenueRecordUpdateWithoutClinicInput, Prisma.RevenueRecordUncheckedUpdateWithoutClinicInput>;
    create: Prisma.XOR<Prisma.RevenueRecordCreateWithoutClinicInput, Prisma.RevenueRecordUncheckedCreateWithoutClinicInput>;
};
export type RevenueRecordUpdateWithWhereUniqueWithoutClinicInput = {
    where: Prisma.RevenueRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.RevenueRecordUpdateWithoutClinicInput, Prisma.RevenueRecordUncheckedUpdateWithoutClinicInput>;
};
export type RevenueRecordUpdateManyWithWhereWithoutClinicInput = {
    where: Prisma.RevenueRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.RevenueRecordUpdateManyMutationInput, Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicInput>;
};
export type RevenueRecordScalarWhereInput = {
    AND?: Prisma.RevenueRecordScalarWhereInput | Prisma.RevenueRecordScalarWhereInput[];
    OR?: Prisma.RevenueRecordScalarWhereInput[];
    NOT?: Prisma.RevenueRecordScalarWhereInput | Prisma.RevenueRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"RevenueRecord"> | string;
    clinicId?: Prisma.StringFilter<"RevenueRecord"> | string;
    category?: Prisma.StringFilter<"RevenueRecord"> | string;
    amount?: Prisma.FloatFilter<"RevenueRecord"> | number;
    description?: Prisma.StringNullableFilter<"RevenueRecord"> | string | null;
    date?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RevenueRecord"> | Date | string;
};
export type RevenueRecordCreateManyClinicInput = {
    id?: string;
    category: string;
    amount: number;
    description?: string | null;
    date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RevenueRecordUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordUncheckedUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordUncheckedUpdateManyWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevenueRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revenueRecord"]>;
export type RevenueRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revenueRecord"]>;
export type RevenueRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revenueRecord"]>;
export type RevenueRecordSelectScalar = {
    id?: boolean;
    clinicId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RevenueRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clinicId" | "category" | "amount" | "description" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["revenueRecord"]>;
export type RevenueRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type RevenueRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type RevenueRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type $RevenueRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RevenueRecord";
    objects: {
        clinic: Prisma.$ClinicPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clinicId: string;
        category: string;
        amount: number;
        description: string | null;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["revenueRecord"]>;
    composites: {};
};
export type RevenueRecordGetPayload<S extends boolean | null | undefined | RevenueRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload, S>;
export type RevenueRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RevenueRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RevenueRecordCountAggregateInputType | true;
};
export interface RevenueRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RevenueRecord'];
        meta: {
            name: 'RevenueRecord';
        };
    };
    findUnique<T extends RevenueRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, RevenueRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RevenueRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RevenueRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RevenueRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, RevenueRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RevenueRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RevenueRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RevenueRecordFindManyArgs>(args?: Prisma.SelectSubset<T, RevenueRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RevenueRecordCreateArgs>(args: Prisma.SelectSubset<T, RevenueRecordCreateArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RevenueRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, RevenueRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RevenueRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RevenueRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RevenueRecordDeleteArgs>(args: Prisma.SelectSubset<T, RevenueRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RevenueRecordUpdateArgs>(args: Prisma.SelectSubset<T, RevenueRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RevenueRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, RevenueRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RevenueRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, RevenueRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RevenueRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RevenueRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RevenueRecordUpsertArgs>(args: Prisma.SelectSubset<T, RevenueRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__RevenueRecordClient<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RevenueRecordCountArgs>(args?: Prisma.Subset<T, RevenueRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RevenueRecordCountAggregateOutputType> : number>;
    aggregate<T extends RevenueRecordAggregateArgs>(args: Prisma.Subset<T, RevenueRecordAggregateArgs>): Prisma.PrismaPromise<GetRevenueRecordAggregateType<T>>;
    groupBy<T extends RevenueRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RevenueRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: RevenueRecordGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RevenueRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenueRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RevenueRecordFieldRefs;
}
export interface Prisma__RevenueRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clinic<T extends Prisma.ClinicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RevenueRecordFieldRefs {
    readonly id: Prisma.FieldRef<"RevenueRecord", 'String'>;
    readonly clinicId: Prisma.FieldRef<"RevenueRecord", 'String'>;
    readonly category: Prisma.FieldRef<"RevenueRecord", 'String'>;
    readonly amount: Prisma.FieldRef<"RevenueRecord", 'Float'>;
    readonly description: Prisma.FieldRef<"RevenueRecord", 'String'>;
    readonly date: Prisma.FieldRef<"RevenueRecord", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RevenueRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RevenueRecord", 'DateTime'>;
}
export type RevenueRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where: Prisma.RevenueRecordWhereUniqueInput;
};
export type RevenueRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where: Prisma.RevenueRecordWhereUniqueInput;
};
export type RevenueRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where?: Prisma.RevenueRecordWhereInput;
    orderBy?: Prisma.RevenueRecordOrderByWithRelationInput | Prisma.RevenueRecordOrderByWithRelationInput[];
    cursor?: Prisma.RevenueRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevenueRecordScalarFieldEnum | Prisma.RevenueRecordScalarFieldEnum[];
};
export type RevenueRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where?: Prisma.RevenueRecordWhereInput;
    orderBy?: Prisma.RevenueRecordOrderByWithRelationInput | Prisma.RevenueRecordOrderByWithRelationInput[];
    cursor?: Prisma.RevenueRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevenueRecordScalarFieldEnum | Prisma.RevenueRecordScalarFieldEnum[];
};
export type RevenueRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where?: Prisma.RevenueRecordWhereInput;
    orderBy?: Prisma.RevenueRecordOrderByWithRelationInput | Prisma.RevenueRecordOrderByWithRelationInput[];
    cursor?: Prisma.RevenueRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevenueRecordScalarFieldEnum | Prisma.RevenueRecordScalarFieldEnum[];
};
export type RevenueRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevenueRecordCreateInput, Prisma.RevenueRecordUncheckedCreateInput>;
};
export type RevenueRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RevenueRecordCreateManyInput | Prisma.RevenueRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevenueRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    data: Prisma.RevenueRecordCreateManyInput | Prisma.RevenueRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RevenueRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RevenueRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevenueRecordUpdateInput, Prisma.RevenueRecordUncheckedUpdateInput>;
    where: Prisma.RevenueRecordWhereUniqueInput;
};
export type RevenueRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RevenueRecordUpdateManyMutationInput, Prisma.RevenueRecordUncheckedUpdateManyInput>;
    where?: Prisma.RevenueRecordWhereInput;
    limit?: number;
};
export type RevenueRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevenueRecordUpdateManyMutationInput, Prisma.RevenueRecordUncheckedUpdateManyInput>;
    where?: Prisma.RevenueRecordWhereInput;
    limit?: number;
    include?: Prisma.RevenueRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RevenueRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where: Prisma.RevenueRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevenueRecordCreateInput, Prisma.RevenueRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RevenueRecordUpdateInput, Prisma.RevenueRecordUncheckedUpdateInput>;
};
export type RevenueRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
    where: Prisma.RevenueRecordWhereUniqueInput;
};
export type RevenueRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevenueRecordWhereInput;
    limit?: number;
};
export type RevenueRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevenueRecordSelect<ExtArgs> | null;
    omit?: Prisma.RevenueRecordOmit<ExtArgs> | null;
    include?: Prisma.RevenueRecordInclude<ExtArgs> | null;
};
export {};
