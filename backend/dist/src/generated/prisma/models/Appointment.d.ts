import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentPayload>;
export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _avg: AppointmentAvgAggregateOutputType | null;
    _sum: AppointmentSumAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type AppointmentAvgAggregateOutputType = {
    fee: number | null;
};
export type AppointmentSumAggregateOutputType = {
    fee: number | null;
};
export type AppointmentMinAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    patientId: string | null;
    doctorId: string | null;
    date: Date | null;
    startTime: string | null;
    endTime: string | null;
    status: $Enums.AppointmentStatus | null;
    reason: string | null;
    notes: string | null;
    fee: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    patientId: string | null;
    doctorId: string | null;
    date: Date | null;
    startTime: string | null;
    endTime: string | null;
    status: $Enums.AppointmentStatus | null;
    reason: string | null;
    notes: string | null;
    fee: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentCountAggregateOutputType = {
    id: number;
    clinicId: number;
    patientId: number;
    doctorId: number;
    date: number;
    startTime: number;
    endTime: number;
    status: number;
    reason: number;
    notes: number;
    fee: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AppointmentAvgAggregateInputType = {
    fee?: true;
};
export type AppointmentSumAggregateInputType = {
    fee?: true;
};
export type AppointmentMinAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    doctorId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    reason?: true;
    notes?: true;
    fee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentMaxAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    doctorId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    reason?: true;
    notes?: true;
    fee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentCountAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    doctorId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    reason?: true;
    notes?: true;
    fee?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AppointmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentCountAggregateInputType;
    _avg?: AppointmentAvgAggregateInputType;
    _sum?: AppointmentSumAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointment[P]> : Prisma.GetScalarType<T[P], AggregateAppointment[P]>;
};
export type AppointmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithAggregationInput | Prisma.AppointmentOrderByWithAggregationInput[];
    by: Prisma.AppointmentScalarFieldEnum[] | Prisma.AppointmentScalarFieldEnum;
    having?: Prisma.AppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _avg?: AppointmentAvgAggregateInputType;
    _sum?: AppointmentSumAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type AppointmentGroupByOutputType = {
    id: string;
    clinicId: string;
    patientId: string;
    doctorId: string;
    date: Date;
    startTime: string;
    endTime: string;
    status: $Enums.AppointmentStatus;
    reason: string | null;
    notes: string | null;
    fee: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _avg: AppointmentAvgAggregateOutputType | null;
    _sum: AppointmentSumAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
}>>;
export type AppointmentWhereInput = {
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    clinicId?: Prisma.StringFilter<"Appointment"> | string;
    patientId?: Prisma.StringFilter<"Appointment"> | string;
    doctorId?: Prisma.StringFilter<"Appointment"> | string;
    date?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    startTime?: Prisma.StringFilter<"Appointment"> | string;
    endTime?: Prisma.StringFilter<"Appointment"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    reason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    fee?: Prisma.FloatNullableFilter<"Appointment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    doctor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AppointmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clinic?: Prisma.ClinicOrderByWithRelationInput;
    patient?: Prisma.PatientOrderByWithRelationInput;
    doctor?: Prisma.UserOrderByWithRelationInput;
};
export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    clinicId?: Prisma.StringFilter<"Appointment"> | string;
    patientId?: Prisma.StringFilter<"Appointment"> | string;
    doctorId?: Prisma.StringFilter<"Appointment"> | string;
    date?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    startTime?: Prisma.StringFilter<"Appointment"> | string;
    endTime?: Prisma.StringFilter<"Appointment"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    reason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    fee?: Prisma.FloatNullableFilter<"Appointment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    doctor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AppointmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AppointmentCountOrderByAggregateInput;
    _avg?: Prisma.AppointmentAvgOrderByAggregateInput;
    _max?: Prisma.AppointmentMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentMinOrderByAggregateInput;
    _sum?: Prisma.AppointmentSumOrderByAggregateInput;
};
export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    clinicId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    patientId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    doctorId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    startTime?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    status?: Prisma.EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Appointment"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Appointment"> | string | null;
    fee?: Prisma.FloatNullableWithAggregatesFilter<"Appointment"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutAppointmentsInput;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutAppointmentsNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentListRelationFilter = {
    every?: Prisma.AppointmentWhereInput;
    some?: Prisma.AppointmentWhereInput;
    none?: Prisma.AppointmentWhereInput;
};
export type AppointmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentAvgOrderByAggregateInput = {
    fee?: Prisma.SortOrder;
};
export type AppointmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentSumOrderByAggregateInput = {
    fee?: Prisma.SortOrder;
};
export type AppointmentCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput> | Prisma.AppointmentCreateWithoutClinicInput[] | Prisma.AppointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClinicInput | Prisma.AppointmentCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.AppointmentCreateManyClinicInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput> | Prisma.AppointmentCreateWithoutClinicInput[] | Prisma.AppointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClinicInput | Prisma.AppointmentCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.AppointmentCreateManyClinicInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput> | Prisma.AppointmentCreateWithoutClinicInput[] | Prisma.AppointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClinicInput | Prisma.AppointmentCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutClinicInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.AppointmentCreateManyClinicInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutClinicInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutClinicInput | Prisma.AppointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput> | Prisma.AppointmentCreateWithoutClinicInput[] | Prisma.AppointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClinicInput | Prisma.AppointmentCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutClinicInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.AppointmentCreateManyClinicInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutClinicInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutClinicInput | Prisma.AppointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput> | Prisma.AppointmentCreateWithoutDoctorInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorInput | Prisma.AppointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput> | Prisma.AppointmentCreateWithoutDoctorInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorInput | Prisma.AppointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput> | Prisma.AppointmentCreateWithoutDoctorInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorInput | Prisma.AppointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput | Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput> | Prisma.AppointmentCreateWithoutDoctorInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorInput | Prisma.AppointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput | Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput> | Prisma.AppointmentCreateWithoutPatientInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientInput | Prisma.AppointmentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.AppointmentCreateManyPatientInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput> | Prisma.AppointmentCreateWithoutPatientInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientInput | Prisma.AppointmentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.AppointmentCreateManyPatientInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput> | Prisma.AppointmentCreateWithoutPatientInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientInput | Prisma.AppointmentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.AppointmentCreateManyPatientInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput | Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput> | Prisma.AppointmentCreateWithoutPatientInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientInput | Prisma.AppointmentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.AppointmentCreateManyPatientInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput | Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AppointmentCreateWithoutClinicInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateWithoutClinicInput = {
    id?: string;
    patientId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentCreateOrConnectWithoutClinicInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput>;
};
export type AppointmentCreateManyClinicInputEnvelope = {
    data: Prisma.AppointmentCreateManyClinicInput | Prisma.AppointmentCreateManyClinicInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutClinicInput, Prisma.AppointmentUncheckedUpdateWithoutClinicInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutClinicInput, Prisma.AppointmentUncheckedCreateWithoutClinicInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutClinicInput, Prisma.AppointmentUncheckedUpdateWithoutClinicInput>;
};
export type AppointmentUpdateManyWithWhereWithoutClinicInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutClinicInput>;
};
export type AppointmentScalarWhereInput = {
    AND?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    OR?: Prisma.AppointmentScalarWhereInput[];
    NOT?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    clinicId?: Prisma.StringFilter<"Appointment"> | string;
    patientId?: Prisma.StringFilter<"Appointment"> | string;
    doctorId?: Prisma.StringFilter<"Appointment"> | string;
    date?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    startTime?: Prisma.StringFilter<"Appointment"> | string;
    endTime?: Prisma.StringFilter<"Appointment"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    reason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    fee?: Prisma.FloatNullableFilter<"Appointment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateWithoutDoctorInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutAppointmentsInput;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput>;
};
export type AppointmentCreateManyDoctorInputEnvelope = {
    data: Prisma.AppointmentCreateManyDoctorInput | Prisma.AppointmentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutDoctorInput, Prisma.AppointmentUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorInput, Prisma.AppointmentUncheckedCreateWithoutDoctorInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutDoctorInput, Prisma.AppointmentUncheckedUpdateWithoutDoctorInput>;
};
export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutDoctorInput>;
};
export type AppointmentCreateWithoutPatientInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string;
    clinicId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput>;
};
export type AppointmentCreateManyPatientInputEnvelope = {
    data: Prisma.AppointmentCreateManyPatientInput | Prisma.AppointmentCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutPatientInput, Prisma.AppointmentUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientInput, Prisma.AppointmentUncheckedCreateWithoutPatientInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutPatientInput, Prisma.AppointmentUncheckedUpdateWithoutPatientInput>;
};
export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutPatientInput>;
};
export type AppointmentCreateManyClinicInput = {
    id?: string;
    patientId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyDoctorInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutAppointmentsNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyPatientInput = {
    id?: string;
    clinicId: string;
    doctorId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    status?: $Enums.AppointmentStatus;
    reason?: string | null;
    notes?: string | null;
    fee?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    reason?: boolean;
    notes?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    reason?: boolean;
    notes?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    reason?: boolean;
    notes?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectScalar = {
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    reason?: boolean;
    notes?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AppointmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clinicId" | "patientId" | "doctorId" | "date" | "startTime" | "endTime" | "status" | "reason" | "notes" | "fee" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>;
export type AppointmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AppointmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Appointment";
    objects: {
        clinic: Prisma.$ClinicPayload<ExtArgs>;
        patient: Prisma.$PatientPayload<ExtArgs>;
        doctor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clinicId: string;
        patientId: string;
        doctorId: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: $Enums.AppointmentStatus;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["appointment"]>;
    composites: {};
};
export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentPayload, S>;
export type AppointmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentCountAggregateInputType | true;
};
export interface AppointmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Appointment'];
        meta: {
            name: 'Appointment';
        };
    };
    findUnique<T extends AppointmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentCreateArgs>(args: Prisma.SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AppointmentDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AppointmentUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentCountArgs>(args?: Prisma.Subset<T, AppointmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentAggregateArgs>(args: Prisma.Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;
    groupBy<T extends AppointmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentFieldRefs;
}
export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clinic<T extends Prisma.ClinicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    doctor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentFieldRefs {
    readonly id: Prisma.FieldRef<"Appointment", 'String'>;
    readonly clinicId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly patientId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly doctorId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly date: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"Appointment", 'String'>;
    readonly endTime: Prisma.FieldRef<"Appointment", 'String'>;
    readonly status: Prisma.FieldRef<"Appointment", 'AppointmentStatus'>;
    readonly reason: Prisma.FieldRef<"Appointment", 'String'>;
    readonly notes: Prisma.FieldRef<"Appointment", 'String'>;
    readonly fee: Prisma.FieldRef<"Appointment", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
}
export type AppointmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
};
export type AppointmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AppointmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AppointmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
    include?: Prisma.AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AppointmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
};
export type AppointmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type AppointmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
};
export {};
