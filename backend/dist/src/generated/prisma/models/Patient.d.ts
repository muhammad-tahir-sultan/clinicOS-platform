import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientPayload>;
export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type PatientMinAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    gender: $Enums.Gender | null;
    address: string | null;
    bloodGroup: string | null;
    allergies: string | null;
    medicalNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientMaxAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    gender: $Enums.Gender | null;
    address: string | null;
    bloodGroup: string | null;
    allergies: string | null;
    medicalNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientCountAggregateOutputType = {
    id: number;
    clinicId: number;
    firstName: number;
    lastName: number;
    email: number;
    phone: number;
    dateOfBirth: number;
    gender: number;
    address: number;
    bloodGroup: number;
    allergies: number;
    medicalNotes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PatientMinAggregateInputType = {
    id?: true;
    clinicId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    gender?: true;
    address?: true;
    bloodGroup?: true;
    allergies?: true;
    medicalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientMaxAggregateInputType = {
    id?: true;
    clinicId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    gender?: true;
    address?: true;
    bloodGroup?: true;
    allergies?: true;
    medicalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientCountAggregateInputType = {
    id?: true;
    clinicId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    gender?: true;
    address?: true;
    bloodGroup?: true;
    allergies?: true;
    medicalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientCountAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatient[P]> : Prisma.GetScalarType<T[P], AggregatePatient[P]>;
};
export type PatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithAggregationInput | Prisma.PatientOrderByWithAggregationInput[];
    by: Prisma.PatientScalarFieldEnum[] | Prisma.PatientScalarFieldEnum;
    having?: Prisma.PatientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type PatientGroupByOutputType = {
    id: string;
    clinicId: string;
    firstName: string;
    lastName: string;
    email: string | null;
    phone: string;
    dateOfBirth: Date | null;
    gender: $Enums.Gender | null;
    address: string | null;
    bloodGroup: string | null;
    allergies: string | null;
    medicalNotes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]>;
}>>;
export type PatientWhereInput = {
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    clinicId?: Prisma.StringFilter<"Patient"> | string;
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringFilter<"Patient"> | string;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    bloodGroup?: Prisma.StringNullableFilter<"Patient"> | string | null;
    allergies?: Prisma.StringNullableFilter<"Patient"> | string | null;
    medicalNotes?: Prisma.StringNullableFilter<"Patient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
    visitLogs?: Prisma.VisitLogListRelationFilter;
};
export type PatientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    medicalNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clinic?: Prisma.ClinicOrderByWithRelationInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    visitLogs?: Prisma.VisitLogOrderByRelationAggregateInput;
};
export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    clinicId?: Prisma.StringFilter<"Patient"> | string;
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringFilter<"Patient"> | string;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    bloodGroup?: Prisma.StringNullableFilter<"Patient"> | string | null;
    allergies?: Prisma.StringNullableFilter<"Patient"> | string | null;
    medicalNotes?: Prisma.StringNullableFilter<"Patient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
    visitLogs?: Prisma.VisitLogListRelationFilter;
}, "id">;
export type PatientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    medicalNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PatientCountOrderByAggregateInput;
    _max?: Prisma.PatientMaxOrderByAggregateInput;
    _min?: Prisma.PatientMinOrderByAggregateInput;
};
export type PatientScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    clinicId?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    phone?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null;
    gender?: Prisma.EnumGenderNullableWithAggregatesFilter<"Patient"> | $Enums.Gender | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    bloodGroup?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    allergies?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    medicalNotes?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
};
export type PatientCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutPatientsInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateInput = {
    id?: string;
    clinicId: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutPatientsNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyInput = {
    id?: string;
    clinicId: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientListRelationFilter = {
    every?: Prisma.PatientWhereInput;
    some?: Prisma.PatientWhereInput;
    none?: Prisma.PatientWhereInput;
};
export type PatientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    medicalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    medicalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    medicalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientScalarRelationFilter = {
    is?: Prisma.PatientWhereInput;
    isNot?: Prisma.PatientWhereInput;
};
export type PatientCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput> | Prisma.PatientCreateWithoutClinicInput[] | Prisma.PatientUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutClinicInput | Prisma.PatientCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.PatientCreateManyClinicInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUncheckedCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput> | Prisma.PatientCreateWithoutClinicInput[] | Prisma.PatientUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutClinicInput | Prisma.PatientCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.PatientCreateManyClinicInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput> | Prisma.PatientCreateWithoutClinicInput[] | Prisma.PatientUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutClinicInput | Prisma.PatientCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutClinicInput | Prisma.PatientUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.PatientCreateManyClinicInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutClinicInput | Prisma.PatientUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutClinicInput | Prisma.PatientUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput> | Prisma.PatientCreateWithoutClinicInput[] | Prisma.PatientUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutClinicInput | Prisma.PatientCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutClinicInput | Prisma.PatientUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.PatientCreateManyClinicInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutClinicInput | Prisma.PatientUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutClinicInput | Prisma.PatientUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null;
};
export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutAppointmentsInput, Prisma.PatientUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutAppointmentsInput, Prisma.PatientUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.PatientUpsertWithoutAppointmentsInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.PatientUpdateWithoutAppointmentsInput>, Prisma.PatientUncheckedUpdateWithoutAppointmentsInput>;
};
export type PatientCreateNestedOneWithoutVisitLogsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutVisitLogsInput, Prisma.PatientUncheckedCreateWithoutVisitLogsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutVisitLogsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutVisitLogsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutVisitLogsInput, Prisma.PatientUncheckedCreateWithoutVisitLogsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutVisitLogsInput;
    upsert?: Prisma.PatientUpsertWithoutVisitLogsInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutVisitLogsInput, Prisma.PatientUpdateWithoutVisitLogsInput>, Prisma.PatientUncheckedUpdateWithoutVisitLogsInput>;
};
export type PatientCreateWithoutClinicInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutClinicInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientInput;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutClinicInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput>;
};
export type PatientCreateManyClinicInputEnvelope = {
    data: Prisma.PatientCreateManyClinicInput | Prisma.PatientCreateManyClinicInput[];
    skipDuplicates?: boolean;
};
export type PatientUpsertWithWhereUniqueWithoutClinicInput = {
    where: Prisma.PatientWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientUpdateWithoutClinicInput, Prisma.PatientUncheckedUpdateWithoutClinicInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutClinicInput, Prisma.PatientUncheckedCreateWithoutClinicInput>;
};
export type PatientUpdateWithWhereUniqueWithoutClinicInput = {
    where: Prisma.PatientWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutClinicInput, Prisma.PatientUncheckedUpdateWithoutClinicInput>;
};
export type PatientUpdateManyWithWhereWithoutClinicInput = {
    where: Prisma.PatientScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyWithoutClinicInput>;
};
export type PatientScalarWhereInput = {
    AND?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    OR?: Prisma.PatientScalarWhereInput[];
    NOT?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    clinicId?: Prisma.StringFilter<"Patient"> | string;
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringFilter<"Patient"> | string;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    bloodGroup?: Prisma.StringNullableFilter<"Patient"> | string | null;
    allergies?: Prisma.StringNullableFilter<"Patient"> | string | null;
    medicalNotes?: Prisma.StringNullableFilter<"Patient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
};
export type PatientCreateWithoutAppointmentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutPatientsInput;
    visitLogs?: Prisma.VisitLogCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    clinicId: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    visitLogs?: Prisma.VisitLogUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutAppointmentsInput, Prisma.PatientUncheckedCreateWithoutAppointmentsInput>;
};
export type PatientUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutAppointmentsInput, Prisma.PatientUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutAppointmentsInput, Prisma.PatientUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutAppointmentsInput, Prisma.PatientUncheckedUpdateWithoutAppointmentsInput>;
};
export type PatientUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutPatientsNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutVisitLogsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutPatientsInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutVisitLogsInput = {
    id?: string;
    clinicId: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutVisitLogsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutVisitLogsInput, Prisma.PatientUncheckedCreateWithoutVisitLogsInput>;
};
export type PatientUpsertWithoutVisitLogsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutVisitLogsInput, Prisma.PatientUncheckedUpdateWithoutVisitLogsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutVisitLogsInput, Prisma.PatientUncheckedCreateWithoutVisitLogsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutVisitLogsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutVisitLogsInput, Prisma.PatientUncheckedUpdateWithoutVisitLogsInput>;
};
export type PatientUpdateWithoutVisitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutPatientsNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutVisitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyClinicInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone: string;
    dateOfBirth?: Date | string | null;
    gender?: $Enums.Gender | null;
    address?: string | null;
    bloodGroup?: string | null;
    allergies?: string | null;
    medicalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientNestedInput;
    visitLogs?: Prisma.VisitLogUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput;
    visitLogs?: Prisma.VisitLogUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateManyWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCountOutputType = {
    appointments: number;
    visitLogs: number;
};
export type PatientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs;
    visitLogs?: boolean | PatientCountOutputTypeCountVisitLogsArgs;
};
export type PatientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type PatientCountOutputTypeCountVisitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitLogWhereInput;
};
export type PatientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    address?: boolean;
    bloodGroup?: boolean;
    allergies?: boolean;
    medicalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.Patient$appointmentsArgs<ExtArgs>;
    visitLogs?: boolean | Prisma.Patient$visitLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    address?: boolean;
    bloodGroup?: boolean;
    allergies?: boolean;
    medicalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    address?: boolean;
    bloodGroup?: boolean;
    allergies?: boolean;
    medicalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectScalar = {
    id?: boolean;
    clinicId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    address?: boolean;
    bloodGroup?: boolean;
    allergies?: boolean;
    medicalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PatientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clinicId" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "gender" | "address" | "bloodGroup" | "allergies" | "medicalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>;
export type PatientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.Patient$appointmentsArgs<ExtArgs>;
    visitLogs?: boolean | Prisma.Patient$visitLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type PatientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
};
export type $PatientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Patient";
    objects: {
        clinic: Prisma.$ClinicPayload<ExtArgs>;
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
        visitLogs: Prisma.$VisitLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clinicId: string;
        firstName: string;
        lastName: string;
        email: string | null;
        phone: string;
        dateOfBirth: Date | null;
        gender: $Enums.Gender | null;
        address: string | null;
        bloodGroup: string | null;
        allergies: string | null;
        medicalNotes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["patient"]>;
    composites: {};
};
export type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientPayload, S>;
export type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientCountAggregateInputType | true;
};
export interface PatientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Patient'];
        meta: {
            name: 'Patient';
        };
    };
    findUnique<T extends PatientFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientFindManyArgs>(args?: Prisma.SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientCreateArgs>(args: Prisma.SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientDeleteArgs>(args: Prisma.SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientUpdateArgs>(args: Prisma.SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientUpsertArgs>(args: Prisma.SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientCountArgs>(args?: Prisma.Subset<T, PatientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientCountAggregateOutputType> : number>;
    aggregate<T extends PatientAggregateArgs>(args: Prisma.Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>;
    groupBy<T extends PatientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientFieldRefs;
}
export interface Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clinic<T extends Prisma.ClinicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointments<T extends Prisma.Patient$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    visitLogs<T extends Prisma.Patient$visitLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$visitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientFieldRefs {
    readonly id: Prisma.FieldRef<"Patient", 'String'>;
    readonly clinicId: Prisma.FieldRef<"Patient", 'String'>;
    readonly firstName: Prisma.FieldRef<"Patient", 'String'>;
    readonly lastName: Prisma.FieldRef<"Patient", 'String'>;
    readonly email: Prisma.FieldRef<"Patient", 'String'>;
    readonly phone: Prisma.FieldRef<"Patient", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly gender: Prisma.FieldRef<"Patient", 'Gender'>;
    readonly address: Prisma.FieldRef<"Patient", 'String'>;
    readonly bloodGroup: Prisma.FieldRef<"Patient", 'String'>;
    readonly allergies: Prisma.FieldRef<"Patient", 'String'>;
    readonly medicalNotes: Prisma.FieldRef<"Patient", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Patient", 'DateTime'>;
}
export type PatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
};
export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type PatientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
    include?: Prisma.PatientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
};
export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type Patient$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Patient$visitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
};
export {};
