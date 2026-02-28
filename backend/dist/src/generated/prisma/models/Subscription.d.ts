import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubscriptionPayload>;
export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type SubscriptionAvgAggregateOutputType = {
    maxDoctors: number | null;
    maxStaff: number | null;
};
export type SubscriptionSumAggregateOutputType = {
    maxDoctors: number | null;
    maxStaff: number | null;
};
export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    plan: $Enums.SubscriptionPlan | null;
    status: $Enums.SubscriptionStatus | null;
    maxDoctors: number | null;
    maxStaff: number | null;
    startDate: Date | null;
    expiryDate: Date | null;
    billingCycle: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    plan: $Enums.SubscriptionPlan | null;
    status: $Enums.SubscriptionStatus | null;
    maxDoctors: number | null;
    maxStaff: number | null;
    startDate: Date | null;
    expiryDate: Date | null;
    billingCycle: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionCountAggregateOutputType = {
    id: number;
    clinicId: number;
    plan: number;
    status: number;
    maxDoctors: number;
    maxStaff: number;
    startDate: number;
    expiryDate: number;
    billingCycle: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubscriptionAvgAggregateInputType = {
    maxDoctors?: true;
    maxStaff?: true;
};
export type SubscriptionSumAggregateInputType = {
    maxDoctors?: true;
    maxStaff?: true;
};
export type SubscriptionMinAggregateInputType = {
    id?: true;
    clinicId?: true;
    plan?: true;
    status?: true;
    maxDoctors?: true;
    maxStaff?: true;
    startDate?: true;
    expiryDate?: true;
    billingCycle?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionMaxAggregateInputType = {
    id?: true;
    clinicId?: true;
    plan?: true;
    status?: true;
    maxDoctors?: true;
    maxStaff?: true;
    startDate?: true;
    expiryDate?: true;
    billingCycle?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionCountAggregateInputType = {
    id?: true;
    clinicId?: true;
    plan?: true;
    status?: true;
    maxDoctors?: true;
    maxStaff?: true;
    startDate?: true;
    expiryDate?: true;
    billingCycle?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionCountAggregateInputType;
    _avg?: SubscriptionAvgAggregateInputType;
    _sum?: SubscriptionSumAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription[P]> : Prisma.GetScalarType<T[P], AggregateSubscription[P]>;
};
export type SubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithAggregationInput | Prisma.SubscriptionOrderByWithAggregationInput[];
    by: Prisma.SubscriptionScalarFieldEnum[] | Prisma.SubscriptionScalarFieldEnum;
    having?: Prisma.SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _avg?: SubscriptionAvgAggregateInputType;
    _sum?: SubscriptionSumAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type SubscriptionGroupByOutputType = {
    id: string;
    clinicId: string;
    plan: $Enums.SubscriptionPlan;
    status: $Enums.SubscriptionStatus;
    maxDoctors: number;
    maxStaff: number;
    startDate: Date;
    expiryDate: Date;
    billingCycle: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
}>>;
export type SubscriptionWhereInput = {
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    id?: Prisma.StringFilter<"Subscription"> | string;
    clinicId?: Prisma.StringFilter<"Subscription"> | string;
    plan?: Prisma.EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFilter<"Subscription"> | number;
    maxStaff?: Prisma.IntFilter<"Subscription"> | number;
    startDate?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    expiryDate?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    billingCycle?: Prisma.StringFilter<"Subscription"> | string;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
};
export type SubscriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clinic?: Prisma.ClinicOrderByWithRelationInput;
};
export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clinicId?: string;
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    plan?: Prisma.EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFilter<"Subscription"> | number;
    maxStaff?: Prisma.IntFilter<"Subscription"> | number;
    startDate?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    expiryDate?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    billingCycle?: Prisma.StringFilter<"Subscription"> | string;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
}, "id" | "clinicId">;
export type SubscriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubscriptionCountOrderByAggregateInput;
    _avg?: Prisma.SubscriptionAvgOrderByAggregateInput;
    _max?: Prisma.SubscriptionMaxOrderByAggregateInput;
    _min?: Prisma.SubscriptionMinOrderByAggregateInput;
    _sum?: Prisma.SubscriptionSumOrderByAggregateInput;
};
export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    clinicId?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    plan?: Prisma.EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntWithAggregatesFilter<"Subscription"> | number;
    maxStaff?: Prisma.IntWithAggregatesFilter<"Subscription"> | number;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    expiryDate?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    billingCycle?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
};
export type SubscriptionCreateInput = {
    id?: string;
    plan?: $Enums.SubscriptionPlan;
    status?: $Enums.SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    startDate?: Date | string;
    expiryDate: Date | string;
    billingCycle?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutSubscriptionInput;
};
export type SubscriptionUncheckedCreateInput = {
    id?: string;
    clinicId: string;
    plan?: $Enums.SubscriptionPlan;
    status?: $Enums.SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    startDate?: Date | string;
    expiryDate: Date | string;
    billingCycle?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutSubscriptionNestedInput;
};
export type SubscriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionCreateManyInput = {
    id?: string;
    clinicId: string;
    plan?: $Enums.SubscriptionPlan;
    status?: $Enums.SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    startDate?: Date | string;
    expiryDate: Date | string;
    billingCycle?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionNullableScalarRelationFilter = {
    is?: Prisma.SubscriptionWhereInput | null;
    isNot?: Prisma.SubscriptionWhereInput | null;
};
export type SubscriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionAvgOrderByAggregateInput = {
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
};
export type SubscriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionSumOrderByAggregateInput = {
    maxDoctors?: Prisma.SortOrder;
    maxStaff?: Prisma.SortOrder;
};
export type SubscriptionCreateNestedOneWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutClinicInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUncheckedCreateNestedOneWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutClinicInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateOneWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutClinicInput;
    upsert?: Prisma.SubscriptionUpsertWithoutClinicInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutClinicInput, Prisma.SubscriptionUpdateWithoutClinicInput>, Prisma.SubscriptionUncheckedUpdateWithoutClinicInput>;
};
export type SubscriptionUncheckedUpdateOneWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutClinicInput;
    upsert?: Prisma.SubscriptionUpsertWithoutClinicInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutClinicInput, Prisma.SubscriptionUpdateWithoutClinicInput>, Prisma.SubscriptionUncheckedUpdateWithoutClinicInput>;
};
export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan;
};
export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SubscriptionCreateWithoutClinicInput = {
    id?: string;
    plan?: $Enums.SubscriptionPlan;
    status?: $Enums.SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    startDate?: Date | string;
    expiryDate: Date | string;
    billingCycle?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUncheckedCreateWithoutClinicInput = {
    id?: string;
    plan?: $Enums.SubscriptionPlan;
    status?: $Enums.SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    startDate?: Date | string;
    expiryDate: Date | string;
    billingCycle?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionCreateOrConnectWithoutClinicInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
};
export type SubscriptionUpsertWithoutClinicInput = {
    update: Prisma.XOR<Prisma.SubscriptionUpdateWithoutClinicInput, Prisma.SubscriptionUncheckedUpdateWithoutClinicInput>;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutClinicInput, Prisma.SubscriptionUncheckedCreateWithoutClinicInput>;
    where?: Prisma.SubscriptionWhereInput;
};
export type SubscriptionUpdateToOneWithWhereWithoutClinicInput = {
    where?: Prisma.SubscriptionWhereInput;
    data: Prisma.XOR<Prisma.SubscriptionUpdateWithoutClinicInput, Prisma.SubscriptionUncheckedUpdateWithoutClinicInput>;
};
export type SubscriptionUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    maxDoctors?: Prisma.IntFieldUpdateOperationsInput | number;
    maxStaff?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    billingCycle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    plan?: boolean;
    status?: boolean;
    maxDoctors?: boolean;
    maxStaff?: boolean;
    startDate?: boolean;
    expiryDate?: boolean;
    billingCycle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    plan?: boolean;
    status?: boolean;
    maxDoctors?: boolean;
    maxStaff?: boolean;
    startDate?: boolean;
    expiryDate?: boolean;
    billingCycle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    plan?: boolean;
    status?: boolean;
    maxDoctors?: boolean;
    maxStaff?: boolean;
    startDate?: boolean;
    expiryDate?: boolean;
    billingCycle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectScalar = {
    id?: boolean;
    clinicId?: boolean;
    plan?: boolean;
    status?: boolean;
    maxDoctors?: boolean;
    maxStaff?: boolean;
    startDate?: boolean;
    expiryDate?: boolean;
    billingCycle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clinicId" | "plan" | "status" | "maxDoctors" | "maxStaff" | "startDate" | "expiryDate" | "billingCycle" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>;
export type SubscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type $SubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subscription";
    objects: {
        clinic: Prisma.$ClinicPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clinicId: string;
        plan: $Enums.SubscriptionPlan;
        status: $Enums.SubscriptionStatus;
        maxDoctors: number;
        maxStaff: number;
        startDate: Date;
        expiryDate: Date;
        billingCycle: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subscription"]>;
    composites: {};
};
export type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload, S>;
export type SubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionCountAggregateInputType | true;
};
export interface SubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subscription'];
        meta: {
            name: 'Subscription';
        };
    };
    findUnique<T extends SubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubscriptionCreateArgs>(args: Prisma.SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubscriptionCountArgs>(args?: Prisma.Subset<T, SubscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionAggregateArgs>(args: Prisma.Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;
    groupBy<T extends SubscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: SubscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubscriptionFieldRefs;
}
export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clinic<T extends Prisma.ClinicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubscriptionFieldRefs {
    readonly id: Prisma.FieldRef<"Subscription", 'String'>;
    readonly clinicId: Prisma.FieldRef<"Subscription", 'String'>;
    readonly plan: Prisma.FieldRef<"Subscription", 'SubscriptionPlan'>;
    readonly status: Prisma.FieldRef<"Subscription", 'SubscriptionStatus'>;
    readonly maxDoctors: Prisma.FieldRef<"Subscription", 'Int'>;
    readonly maxStaff: Prisma.FieldRef<"Subscription", 'Int'>;
    readonly startDate: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly expiryDate: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly billingCycle: Prisma.FieldRef<"Subscription", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
}
export type SubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
};
export type SubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
    include?: Prisma.SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
};
export type SubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type SubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
};
export {};
