import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClinicModel = runtime.Types.Result.DefaultSelection<Prisma.$ClinicPayload>;
export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
};
export type ClinicMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    logo: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClinicMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    logo: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClinicCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    email: number;
    phone: number;
    address: number;
    logo: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClinicMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    email?: true;
    phone?: true;
    address?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClinicMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    email?: true;
    phone?: true;
    address?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClinicCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    email?: true;
    phone?: true;
    address?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClinicAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicWhereInput;
    orderBy?: Prisma.ClinicOrderByWithRelationInput | Prisma.ClinicOrderByWithRelationInput[];
    cursor?: Prisma.ClinicWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClinicCountAggregateInputType;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
};
export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
    [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClinic[P]> : Prisma.GetScalarType<T[P], AggregateClinic[P]>;
};
export type ClinicGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicWhereInput;
    orderBy?: Prisma.ClinicOrderByWithAggregationInput | Prisma.ClinicOrderByWithAggregationInput[];
    by: Prisma.ClinicScalarFieldEnum[] | Prisma.ClinicScalarFieldEnum;
    having?: Prisma.ClinicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicCountAggregateInputType | true;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
};
export type ClinicGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    email: string;
    phone: string | null;
    address: string | null;
    logo: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
};
type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClinicGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClinicGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClinicGroupByOutputType[P]>;
}>>;
export type ClinicWhereInput = {
    AND?: Prisma.ClinicWhereInput | Prisma.ClinicWhereInput[];
    OR?: Prisma.ClinicWhereInput[];
    NOT?: Prisma.ClinicWhereInput | Prisma.ClinicWhereInput[];
    id?: Prisma.StringFilter<"Clinic"> | string;
    name?: Prisma.StringFilter<"Clinic"> | string;
    slug?: Prisma.StringFilter<"Clinic"> | string;
    email?: Prisma.StringFilter<"Clinic"> | string;
    phone?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    address?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    logo?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    isActive?: Prisma.BoolFilter<"Clinic"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Clinic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clinic"> | Date | string;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    users?: Prisma.UserListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
    visitLogs?: Prisma.VisitLogListRelationFilter;
    revenues?: Prisma.RevenueRecordListRelationFilter;
};
export type ClinicOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    subscription?: Prisma.SubscriptionOrderByWithRelationInput;
    users?: Prisma.UserOrderByRelationAggregateInput;
    patients?: Prisma.PatientOrderByRelationAggregateInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    visitLogs?: Prisma.VisitLogOrderByRelationAggregateInput;
    revenues?: Prisma.RevenueRecordOrderByRelationAggregateInput;
};
export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ClinicWhereInput | Prisma.ClinicWhereInput[];
    OR?: Prisma.ClinicWhereInput[];
    NOT?: Prisma.ClinicWhereInput | Prisma.ClinicWhereInput[];
    name?: Prisma.StringFilter<"Clinic"> | string;
    email?: Prisma.StringFilter<"Clinic"> | string;
    phone?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    address?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    logo?: Prisma.StringNullableFilter<"Clinic"> | string | null;
    isActive?: Prisma.BoolFilter<"Clinic"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Clinic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clinic"> | Date | string;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    users?: Prisma.UserListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
    visitLogs?: Prisma.VisitLogListRelationFilter;
    revenues?: Prisma.RevenueRecordListRelationFilter;
}, "id" | "slug">;
export type ClinicOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClinicCountOrderByAggregateInput;
    _max?: Prisma.ClinicMaxOrderByAggregateInput;
    _min?: Prisma.ClinicMinOrderByAggregateInput;
};
export type ClinicScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClinicScalarWhereWithAggregatesInput | Prisma.ClinicScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClinicScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClinicScalarWhereWithAggregatesInput | Prisma.ClinicScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Clinic"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Clinic"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Clinic"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Clinic"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Clinic"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Clinic"> | string | null;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Clinic"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Clinic"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Clinic"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Clinic"> | Date | string;
};
export type ClinicCreateInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClinicUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClinicMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClinicMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClinicScalarRelationFilter = {
    is?: Prisma.ClinicWhereInput;
    isNot?: Prisma.ClinicWhereInput;
};
export type ClinicNullableScalarRelationFilter = {
    is?: Prisma.ClinicWhereInput | null;
    isNot?: Prisma.ClinicWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClinicCreateNestedOneWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutSubscriptionInput, Prisma.ClinicUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutSubscriptionInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutSubscriptionInput, Prisma.ClinicUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutSubscriptionInput;
    upsert?: Prisma.ClinicUpsertWithoutSubscriptionInput;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutSubscriptionInput, Prisma.ClinicUpdateWithoutSubscriptionInput>, Prisma.ClinicUncheckedUpdateWithoutSubscriptionInput>;
};
export type ClinicCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutUsersInput, Prisma.ClinicUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutUsersInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutUsersInput, Prisma.ClinicUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.ClinicUpsertWithoutUsersInput;
    disconnect?: Prisma.ClinicWhereInput | boolean;
    delete?: Prisma.ClinicWhereInput | boolean;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutUsersInput, Prisma.ClinicUpdateWithoutUsersInput>, Prisma.ClinicUncheckedUpdateWithoutUsersInput>;
};
export type ClinicCreateNestedOneWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutPatientsInput, Prisma.ClinicUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutPatientsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutPatientsInput, Prisma.ClinicUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutPatientsInput;
    upsert?: Prisma.ClinicUpsertWithoutPatientsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutPatientsInput, Prisma.ClinicUpdateWithoutPatientsInput>, Prisma.ClinicUncheckedUpdateWithoutPatientsInput>;
};
export type ClinicCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutAppointmentsInput, Prisma.ClinicUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutAppointmentsInput, Prisma.ClinicUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.ClinicUpsertWithoutAppointmentsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.ClinicUpdateWithoutAppointmentsInput>, Prisma.ClinicUncheckedUpdateWithoutAppointmentsInput>;
};
export type ClinicCreateNestedOneWithoutVisitLogsInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutVisitLogsInput, Prisma.ClinicUncheckedCreateWithoutVisitLogsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutVisitLogsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneRequiredWithoutVisitLogsNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutVisitLogsInput, Prisma.ClinicUncheckedCreateWithoutVisitLogsInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutVisitLogsInput;
    upsert?: Prisma.ClinicUpsertWithoutVisitLogsInput;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutVisitLogsInput, Prisma.ClinicUpdateWithoutVisitLogsInput>, Prisma.ClinicUncheckedUpdateWithoutVisitLogsInput>;
};
export type ClinicCreateNestedOneWithoutRevenuesInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutRevenuesInput, Prisma.ClinicUncheckedCreateWithoutRevenuesInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutRevenuesInput;
    connect?: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateOneRequiredWithoutRevenuesNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicCreateWithoutRevenuesInput, Prisma.ClinicUncheckedCreateWithoutRevenuesInput>;
    connectOrCreate?: Prisma.ClinicCreateOrConnectWithoutRevenuesInput;
    upsert?: Prisma.ClinicUpsertWithoutRevenuesInput;
    connect?: Prisma.ClinicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClinicUpdateToOneWithWhereWithoutRevenuesInput, Prisma.ClinicUpdateWithoutRevenuesInput>, Prisma.ClinicUncheckedUpdateWithoutRevenuesInput>;
};
export type ClinicCreateWithoutSubscriptionInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutSubscriptionInput, Prisma.ClinicUncheckedCreateWithoutSubscriptionInput>;
};
export type ClinicUpsertWithoutSubscriptionInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutSubscriptionInput, Prisma.ClinicUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutSubscriptionInput, Prisma.ClinicUncheckedCreateWithoutSubscriptionInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutSubscriptionInput, Prisma.ClinicUncheckedUpdateWithoutSubscriptionInput>;
};
export type ClinicUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutUsersInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutUsersInput, Prisma.ClinicUncheckedCreateWithoutUsersInput>;
};
export type ClinicUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutUsersInput, Prisma.ClinicUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutUsersInput, Prisma.ClinicUncheckedCreateWithoutUsersInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutUsersInput, Prisma.ClinicUncheckedUpdateWithoutUsersInput>;
};
export type ClinicUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateWithoutPatientsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutPatientsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutPatientsInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutPatientsInput, Prisma.ClinicUncheckedCreateWithoutPatientsInput>;
};
export type ClinicUpsertWithoutPatientsInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutPatientsInput, Prisma.ClinicUncheckedUpdateWithoutPatientsInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutPatientsInput, Prisma.ClinicUncheckedCreateWithoutPatientsInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutPatientsInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutPatientsInput, Prisma.ClinicUncheckedUpdateWithoutPatientsInput>;
};
export type ClinicUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateWithoutAppointmentsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutAppointmentsInput, Prisma.ClinicUncheckedCreateWithoutAppointmentsInput>;
};
export type ClinicUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutAppointmentsInput, Prisma.ClinicUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutAppointmentsInput, Prisma.ClinicUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutAppointmentsInput, Prisma.ClinicUncheckedUpdateWithoutAppointmentsInput>;
};
export type ClinicUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateWithoutVisitLogsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutVisitLogsInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    revenues?: Prisma.RevenueRecordUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutVisitLogsInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutVisitLogsInput, Prisma.ClinicUncheckedCreateWithoutVisitLogsInput>;
};
export type ClinicUpsertWithoutVisitLogsInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutVisitLogsInput, Prisma.ClinicUncheckedUpdateWithoutVisitLogsInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutVisitLogsInput, Prisma.ClinicUncheckedCreateWithoutVisitLogsInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutVisitLogsInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutVisitLogsInput, Prisma.ClinicUncheckedUpdateWithoutVisitLogsInput>;
};
export type ClinicUpdateWithoutVisitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutVisitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    revenues?: Prisma.RevenueRecordUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCreateWithoutRevenuesInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutClinicInput;
};
export type ClinicUncheckedCreateWithoutRevenuesInput = {
    id?: string;
    name: string;
    slug: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutClinicInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutClinicInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutClinicInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClinicInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutClinicInput;
};
export type ClinicCreateOrConnectWithoutRevenuesInput = {
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutRevenuesInput, Prisma.ClinicUncheckedCreateWithoutRevenuesInput>;
};
export type ClinicUpsertWithoutRevenuesInput = {
    update: Prisma.XOR<Prisma.ClinicUpdateWithoutRevenuesInput, Prisma.ClinicUncheckedUpdateWithoutRevenuesInput>;
    create: Prisma.XOR<Prisma.ClinicCreateWithoutRevenuesInput, Prisma.ClinicUncheckedCreateWithoutRevenuesInput>;
    where?: Prisma.ClinicWhereInput;
};
export type ClinicUpdateToOneWithWhereWithoutRevenuesInput = {
    where?: Prisma.ClinicWhereInput;
    data: Prisma.XOR<Prisma.ClinicUpdateWithoutRevenuesInput, Prisma.ClinicUncheckedUpdateWithoutRevenuesInput>;
};
export type ClinicUpdateWithoutRevenuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutClinicNestedInput;
};
export type ClinicUncheckedUpdateWithoutRevenuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutClinicNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutClinicNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutClinicNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClinicNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutClinicNestedInput;
};
export type ClinicCountOutputType = {
    users: number;
    patients: number;
    appointments: number;
    visitLogs: number;
    revenues: number;
};
export type ClinicCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | ClinicCountOutputTypeCountUsersArgs;
    patients?: boolean | ClinicCountOutputTypeCountPatientsArgs;
    appointments?: boolean | ClinicCountOutputTypeCountAppointmentsArgs;
    visitLogs?: boolean | ClinicCountOutputTypeCountVisitLogsArgs;
    revenues?: boolean | ClinicCountOutputTypeCountRevenuesArgs;
};
export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicCountOutputTypeSelect<ExtArgs> | null;
};
export type ClinicCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type ClinicCountOutputTypeCountPatientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
};
export type ClinicCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type ClinicCountOutputTypeCountVisitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitLogWhereInput;
};
export type ClinicCountOutputTypeCountRevenuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevenueRecordWhereInput;
};
export type ClinicSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    subscription?: boolean | Prisma.Clinic$subscriptionArgs<ExtArgs>;
    users?: boolean | Prisma.Clinic$usersArgs<ExtArgs>;
    patients?: boolean | Prisma.Clinic$patientsArgs<ExtArgs>;
    appointments?: boolean | Prisma.Clinic$appointmentsArgs<ExtArgs>;
    visitLogs?: boolean | Prisma.Clinic$visitLogsArgs<ExtArgs>;
    revenues?: boolean | Prisma.Clinic$revenuesArgs<ExtArgs>;
    _count?: boolean | Prisma.ClinicCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clinic"]>;
export type ClinicSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clinic"]>;
export type ClinicSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clinic"]>;
export type ClinicSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClinicOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "email" | "phone" | "address" | "logo" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["clinic"]>;
export type ClinicInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscription?: boolean | Prisma.Clinic$subscriptionArgs<ExtArgs>;
    users?: boolean | Prisma.Clinic$usersArgs<ExtArgs>;
    patients?: boolean | Prisma.Clinic$patientsArgs<ExtArgs>;
    appointments?: boolean | Prisma.Clinic$appointmentsArgs<ExtArgs>;
    visitLogs?: boolean | Prisma.Clinic$visitLogsArgs<ExtArgs>;
    revenues?: boolean | Prisma.Clinic$revenuesArgs<ExtArgs>;
    _count?: boolean | Prisma.ClinicCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClinicIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClinicIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClinicPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Clinic";
    objects: {
        subscription: Prisma.$SubscriptionPayload<ExtArgs> | null;
        users: Prisma.$UserPayload<ExtArgs>[];
        patients: Prisma.$PatientPayload<ExtArgs>[];
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
        visitLogs: Prisma.$VisitLogPayload<ExtArgs>[];
        revenues: Prisma.$RevenueRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        email: string;
        phone: string | null;
        address: string | null;
        logo: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["clinic"]>;
    composites: {};
};
export type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClinicPayload, S>;
export type ClinicCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClinicCountAggregateInputType | true;
};
export interface ClinicDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Clinic'];
        meta: {
            name: 'Clinic';
        };
    };
    findUnique<T extends ClinicFindUniqueArgs>(args: Prisma.SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClinicFindFirstArgs>(args?: Prisma.SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClinicFindManyArgs>(args?: Prisma.SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClinicCreateArgs>(args: Prisma.SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClinicCreateManyArgs>(args?: Prisma.SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClinicDeleteArgs>(args: Prisma.SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClinicUpdateArgs>(args: Prisma.SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClinicDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClinicUpdateManyArgs>(args: Prisma.SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClinicUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClinicUpsertArgs>(args: Prisma.SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClinicCountArgs>(args?: Prisma.Subset<T, ClinicCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClinicCountAggregateOutputType> : number>;
    aggregate<T extends ClinicAggregateArgs>(args: Prisma.Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>;
    groupBy<T extends ClinicGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClinicGroupByArgs['orderBy'];
    } : {
        orderBy?: ClinicGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClinicFieldRefs;
}
export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subscription<T extends Prisma.Clinic$subscriptionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$subscriptionArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.Clinic$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    patients<T extends Prisma.Clinic$patientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    appointments<T extends Prisma.Clinic$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    visitLogs<T extends Prisma.Clinic$visitLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$visitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    revenues<T extends Prisma.Clinic$revenuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clinic$revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevenueRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClinicFieldRefs {
    readonly id: Prisma.FieldRef<"Clinic", 'String'>;
    readonly name: Prisma.FieldRef<"Clinic", 'String'>;
    readonly slug: Prisma.FieldRef<"Clinic", 'String'>;
    readonly email: Prisma.FieldRef<"Clinic", 'String'>;
    readonly phone: Prisma.FieldRef<"Clinic", 'String'>;
    readonly address: Prisma.FieldRef<"Clinic", 'String'>;
    readonly logo: Prisma.FieldRef<"Clinic", 'String'>;
    readonly isActive: Prisma.FieldRef<"Clinic", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Clinic", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Clinic", 'DateTime'>;
}
export type ClinicFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where: Prisma.ClinicWhereUniqueInput;
};
export type ClinicFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where: Prisma.ClinicWhereUniqueInput;
};
export type ClinicFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where?: Prisma.ClinicWhereInput;
    orderBy?: Prisma.ClinicOrderByWithRelationInput | Prisma.ClinicOrderByWithRelationInput[];
    cursor?: Prisma.ClinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicScalarFieldEnum | Prisma.ClinicScalarFieldEnum[];
};
export type ClinicFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where?: Prisma.ClinicWhereInput;
    orderBy?: Prisma.ClinicOrderByWithRelationInput | Prisma.ClinicOrderByWithRelationInput[];
    cursor?: Prisma.ClinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicScalarFieldEnum | Prisma.ClinicScalarFieldEnum[];
};
export type ClinicFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where?: Prisma.ClinicWhereInput;
    orderBy?: Prisma.ClinicOrderByWithRelationInput | Prisma.ClinicOrderByWithRelationInput[];
    cursor?: Prisma.ClinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicScalarFieldEnum | Prisma.ClinicScalarFieldEnum[];
};
export type ClinicCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicCreateInput, Prisma.ClinicUncheckedCreateInput>;
};
export type ClinicCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClinicCreateManyInput | Prisma.ClinicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClinicCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    data: Prisma.ClinicCreateManyInput | Prisma.ClinicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClinicUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicUpdateInput, Prisma.ClinicUncheckedUpdateInput>;
    where: Prisma.ClinicWhereUniqueInput;
};
export type ClinicUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClinicUpdateManyMutationInput, Prisma.ClinicUncheckedUpdateManyInput>;
    where?: Prisma.ClinicWhereInput;
    limit?: number;
};
export type ClinicUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicUpdateManyMutationInput, Prisma.ClinicUncheckedUpdateManyInput>;
    where?: Prisma.ClinicWhereInput;
    limit?: number;
};
export type ClinicUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where: Prisma.ClinicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicCreateInput, Prisma.ClinicUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClinicUpdateInput, Prisma.ClinicUncheckedUpdateInput>;
};
export type ClinicDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
    where: Prisma.ClinicWhereUniqueInput;
};
export type ClinicDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicWhereInput;
    limit?: number;
};
export type Clinic$subscriptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
};
export type Clinic$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Clinic$patientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type Clinic$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type Clinic$visitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    where?: Prisma.VisitLogWhereInput;
    orderBy?: Prisma.VisitLogOrderByWithRelationInput | Prisma.VisitLogOrderByWithRelationInput[];
    cursor?: Prisma.VisitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitLogScalarFieldEnum | Prisma.VisitLogScalarFieldEnum[];
};
export type Clinic$revenuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClinicDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicSelect<ExtArgs> | null;
    omit?: Prisma.ClinicOmit<ExtArgs> | null;
    include?: Prisma.ClinicInclude<ExtArgs> | null;
};
export {};
