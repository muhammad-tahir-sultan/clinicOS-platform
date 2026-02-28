import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisitLogModel = runtime.Types.Result.DefaultSelection<Prisma.$VisitLogPayload>;
export type AggregateVisitLog = {
    _count: VisitLogCountAggregateOutputType | null;
    _min: VisitLogMinAggregateOutputType | null;
    _max: VisitLogMaxAggregateOutputType | null;
};
export type VisitLogMinAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    patientId: string | null;
    diagnosis: string | null;
    treatment: string | null;
    prescription: string | null;
    notes: string | null;
    visitDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisitLogMaxAggregateOutputType = {
    id: string | null;
    clinicId: string | null;
    patientId: string | null;
    diagnosis: string | null;
    treatment: string | null;
    prescription: string | null;
    notes: string | null;
    visitDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisitLogCountAggregateOutputType = {
    id: number;
    clinicId: number;
    patientId: number;
    diagnosis: number;
    treatment: number;
    prescription: number;
    vitals: number;
    notes: number;
    visitDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VisitLogMinAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    diagnosis?: true;
    treatment?: true;
    prescription?: true;
    notes?: true;
    visitDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisitLogMaxAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    diagnosis?: true;
    treatment?: true;
    prescription?: true;
    notes?: true;
    visitDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisitLogCountAggregateInputType = {
    id?: true;
    clinicId?: true;
    patientId?: true;
    diagnosis?: true;
    treatment?: true;
    prescription?: true;
    vitals?: true;
    notes?: true;
    visitDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VisitLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitLogWhereInput;
    orderBy?: Prisma.VisitLogOrderByWithRelationInput | Prisma.VisitLogOrderByWithRelationInput[];
    cursor?: Prisma.VisitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisitLogCountAggregateInputType;
    _min?: VisitLogMinAggregateInputType;
    _max?: VisitLogMaxAggregateInputType;
};
export type GetVisitLogAggregateType<T extends VisitLogAggregateArgs> = {
    [P in keyof T & keyof AggregateVisitLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisitLog[P]> : Prisma.GetScalarType<T[P], AggregateVisitLog[P]>;
};
export type VisitLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitLogWhereInput;
    orderBy?: Prisma.VisitLogOrderByWithAggregationInput | Prisma.VisitLogOrderByWithAggregationInput[];
    by: Prisma.VisitLogScalarFieldEnum[] | Prisma.VisitLogScalarFieldEnum;
    having?: Prisma.VisitLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitLogCountAggregateInputType | true;
    _min?: VisitLogMinAggregateInputType;
    _max?: VisitLogMaxAggregateInputType;
};
export type VisitLogGroupByOutputType = {
    id: string;
    clinicId: string;
    patientId: string;
    diagnosis: string | null;
    treatment: string | null;
    prescription: string | null;
    vitals: runtime.JsonValue | null;
    notes: string | null;
    visitDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: VisitLogCountAggregateOutputType | null;
    _min: VisitLogMinAggregateOutputType | null;
    _max: VisitLogMaxAggregateOutputType | null;
};
type GetVisitLogGroupByPayload<T extends VisitLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisitLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisitLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisitLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisitLogGroupByOutputType[P]>;
}>>;
export type VisitLogWhereInput = {
    AND?: Prisma.VisitLogWhereInput | Prisma.VisitLogWhereInput[];
    OR?: Prisma.VisitLogWhereInput[];
    NOT?: Prisma.VisitLogWhereInput | Prisma.VisitLogWhereInput[];
    id?: Prisma.StringFilter<"VisitLog"> | string;
    clinicId?: Prisma.StringFilter<"VisitLog"> | string;
    patientId?: Prisma.StringFilter<"VisitLog"> | string;
    diagnosis?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    treatment?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    prescription?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    vitals?: Prisma.JsonNullableFilter<"VisitLog">;
    notes?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    visitDate?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
};
export type VisitLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    diagnosis?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    vitals?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clinic?: Prisma.ClinicOrderByWithRelationInput;
    patient?: Prisma.PatientOrderByWithRelationInput;
};
export type VisitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisitLogWhereInput | Prisma.VisitLogWhereInput[];
    OR?: Prisma.VisitLogWhereInput[];
    NOT?: Prisma.VisitLogWhereInput | Prisma.VisitLogWhereInput[];
    clinicId?: Prisma.StringFilter<"VisitLog"> | string;
    patientId?: Prisma.StringFilter<"VisitLog"> | string;
    diagnosis?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    treatment?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    prescription?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    vitals?: Prisma.JsonNullableFilter<"VisitLog">;
    notes?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    visitDate?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    clinic?: Prisma.XOR<Prisma.ClinicScalarRelationFilter, Prisma.ClinicWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
}, "id">;
export type VisitLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    diagnosis?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    vitals?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VisitLogCountOrderByAggregateInput;
    _max?: Prisma.VisitLogMaxOrderByAggregateInput;
    _min?: Prisma.VisitLogMinOrderByAggregateInput;
};
export type VisitLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisitLogScalarWhereWithAggregatesInput | Prisma.VisitLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisitLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisitLogScalarWhereWithAggregatesInput | Prisma.VisitLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VisitLog"> | string;
    clinicId?: Prisma.StringWithAggregatesFilter<"VisitLog"> | string;
    patientId?: Prisma.StringWithAggregatesFilter<"VisitLog"> | string;
    diagnosis?: Prisma.StringNullableWithAggregatesFilter<"VisitLog"> | string | null;
    treatment?: Prisma.StringNullableWithAggregatesFilter<"VisitLog"> | string | null;
    prescription?: Prisma.StringNullableWithAggregatesFilter<"VisitLog"> | string | null;
    vitals?: Prisma.JsonNullableWithAggregatesFilter<"VisitLog">;
    notes?: Prisma.StringNullableWithAggregatesFilter<"VisitLog"> | string | null;
    visitDate?: Prisma.DateTimeWithAggregatesFilter<"VisitLog"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VisitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VisitLog"> | Date | string;
};
export type VisitLogCreateInput = {
    id?: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutVisitLogsInput;
    patient: Prisma.PatientCreateNestedOneWithoutVisitLogsInput;
};
export type VisitLogUncheckedCreateInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutVisitLogsNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutVisitLogsNestedInput;
};
export type VisitLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogCreateManyInput = {
    id?: string;
    clinicId: string;
    patientId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogListRelationFilter = {
    every?: Prisma.VisitLogWhereInput;
    some?: Prisma.VisitLogWhereInput;
    none?: Prisma.VisitLogWhereInput;
};
export type VisitLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VisitLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    diagnosis?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    prescription?: Prisma.SortOrder;
    vitals?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    diagnosis?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    prescription?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clinicId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    diagnosis?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    prescription?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitLogCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput> | Prisma.VisitLogCreateWithoutClinicInput[] | Prisma.VisitLogUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutClinicInput | Prisma.VisitLogCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.VisitLogCreateManyClinicInputEnvelope;
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
};
export type VisitLogUncheckedCreateNestedManyWithoutClinicInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput> | Prisma.VisitLogCreateWithoutClinicInput[] | Prisma.VisitLogUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutClinicInput | Prisma.VisitLogCreateOrConnectWithoutClinicInput[];
    createMany?: Prisma.VisitLogCreateManyClinicInputEnvelope;
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
};
export type VisitLogUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput> | Prisma.VisitLogCreateWithoutClinicInput[] | Prisma.VisitLogUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutClinicInput | Prisma.VisitLogCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.VisitLogUpsertWithWhereUniqueWithoutClinicInput | Prisma.VisitLogUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.VisitLogCreateManyClinicInputEnvelope;
    set?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    disconnect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    delete?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    update?: Prisma.VisitLogUpdateWithWhereUniqueWithoutClinicInput | Prisma.VisitLogUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.VisitLogUpdateManyWithWhereWithoutClinicInput | Prisma.VisitLogUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
};
export type VisitLogUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput> | Prisma.VisitLogCreateWithoutClinicInput[] | Prisma.VisitLogUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutClinicInput | Prisma.VisitLogCreateOrConnectWithoutClinicInput[];
    upsert?: Prisma.VisitLogUpsertWithWhereUniqueWithoutClinicInput | Prisma.VisitLogUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: Prisma.VisitLogCreateManyClinicInputEnvelope;
    set?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    disconnect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    delete?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    update?: Prisma.VisitLogUpdateWithWhereUniqueWithoutClinicInput | Prisma.VisitLogUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: Prisma.VisitLogUpdateManyWithWhereWithoutClinicInput | Prisma.VisitLogUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
};
export type VisitLogCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput> | Prisma.VisitLogCreateWithoutPatientInput[] | Prisma.VisitLogUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutPatientInput | Prisma.VisitLogCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.VisitLogCreateManyPatientInputEnvelope;
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
};
export type VisitLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput> | Prisma.VisitLogCreateWithoutPatientInput[] | Prisma.VisitLogUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutPatientInput | Prisma.VisitLogCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.VisitLogCreateManyPatientInputEnvelope;
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
};
export type VisitLogUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput> | Prisma.VisitLogCreateWithoutPatientInput[] | Prisma.VisitLogUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutPatientInput | Prisma.VisitLogCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.VisitLogUpsertWithWhereUniqueWithoutPatientInput | Prisma.VisitLogUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.VisitLogCreateManyPatientInputEnvelope;
    set?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    disconnect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    delete?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    update?: Prisma.VisitLogUpdateWithWhereUniqueWithoutPatientInput | Prisma.VisitLogUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.VisitLogUpdateManyWithWhereWithoutPatientInput | Prisma.VisitLogUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
};
export type VisitLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput> | Prisma.VisitLogCreateWithoutPatientInput[] | Prisma.VisitLogUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.VisitLogCreateOrConnectWithoutPatientInput | Prisma.VisitLogCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.VisitLogUpsertWithWhereUniqueWithoutPatientInput | Prisma.VisitLogUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.VisitLogCreateManyPatientInputEnvelope;
    set?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    disconnect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    delete?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    connect?: Prisma.VisitLogWhereUniqueInput | Prisma.VisitLogWhereUniqueInput[];
    update?: Prisma.VisitLogUpdateWithWhereUniqueWithoutPatientInput | Prisma.VisitLogUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.VisitLogUpdateManyWithWhereWithoutPatientInput | Prisma.VisitLogUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
};
export type VisitLogCreateWithoutClinicInput = {
    id?: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutVisitLogsInput;
};
export type VisitLogUncheckedCreateWithoutClinicInput = {
    id?: string;
    patientId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogCreateOrConnectWithoutClinicInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput>;
};
export type VisitLogCreateManyClinicInputEnvelope = {
    data: Prisma.VisitLogCreateManyClinicInput | Prisma.VisitLogCreateManyClinicInput[];
    skipDuplicates?: boolean;
};
export type VisitLogUpsertWithWhereUniqueWithoutClinicInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitLogUpdateWithoutClinicInput, Prisma.VisitLogUncheckedUpdateWithoutClinicInput>;
    create: Prisma.XOR<Prisma.VisitLogCreateWithoutClinicInput, Prisma.VisitLogUncheckedCreateWithoutClinicInput>;
};
export type VisitLogUpdateWithWhereUniqueWithoutClinicInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitLogUpdateWithoutClinicInput, Prisma.VisitLogUncheckedUpdateWithoutClinicInput>;
};
export type VisitLogUpdateManyWithWhereWithoutClinicInput = {
    where: Prisma.VisitLogScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitLogUpdateManyMutationInput, Prisma.VisitLogUncheckedUpdateManyWithoutClinicInput>;
};
export type VisitLogScalarWhereInput = {
    AND?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
    OR?: Prisma.VisitLogScalarWhereInput[];
    NOT?: Prisma.VisitLogScalarWhereInput | Prisma.VisitLogScalarWhereInput[];
    id?: Prisma.StringFilter<"VisitLog"> | string;
    clinicId?: Prisma.StringFilter<"VisitLog"> | string;
    patientId?: Prisma.StringFilter<"VisitLog"> | string;
    diagnosis?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    treatment?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    prescription?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    vitals?: Prisma.JsonNullableFilter<"VisitLog">;
    notes?: Prisma.StringNullableFilter<"VisitLog"> | string | null;
    visitDate?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VisitLog"> | Date | string;
};
export type VisitLogCreateWithoutPatientInput = {
    id?: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clinic: Prisma.ClinicCreateNestedOneWithoutVisitLogsInput;
};
export type VisitLogUncheckedCreateWithoutPatientInput = {
    id?: string;
    clinicId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogCreateOrConnectWithoutPatientInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput>;
};
export type VisitLogCreateManyPatientInputEnvelope = {
    data: Prisma.VisitLogCreateManyPatientInput | Prisma.VisitLogCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type VisitLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitLogUpdateWithoutPatientInput, Prisma.VisitLogUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.VisitLogCreateWithoutPatientInput, Prisma.VisitLogUncheckedCreateWithoutPatientInput>;
};
export type VisitLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.VisitLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitLogUpdateWithoutPatientInput, Prisma.VisitLogUncheckedUpdateWithoutPatientInput>;
};
export type VisitLogUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.VisitLogScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitLogUpdateManyMutationInput, Prisma.VisitLogUncheckedUpdateManyWithoutPatientInput>;
};
export type VisitLogCreateManyClinicInput = {
    id?: string;
    patientId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutVisitLogsNestedInput;
};
export type VisitLogUncheckedUpdateWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogUncheckedUpdateManyWithoutClinicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogCreateManyPatientInput = {
    id?: string;
    clinicId: string;
    diagnosis?: string | null;
    treatment?: string | null;
    prescription?: string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: string | null;
    visitDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitLogUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: Prisma.ClinicUpdateOneRequiredWithoutVisitLogsNestedInput;
};
export type VisitLogUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clinicId?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vitals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    diagnosis?: boolean;
    treatment?: boolean;
    prescription?: boolean;
    vitals?: boolean;
    notes?: boolean;
    visitDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitLog"]>;
export type VisitLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    diagnosis?: boolean;
    treatment?: boolean;
    prescription?: boolean;
    vitals?: boolean;
    notes?: boolean;
    visitDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitLog"]>;
export type VisitLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    diagnosis?: boolean;
    treatment?: boolean;
    prescription?: boolean;
    vitals?: boolean;
    notes?: boolean;
    visitDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitLog"]>;
export type VisitLogSelectScalar = {
    id?: boolean;
    clinicId?: boolean;
    patientId?: boolean;
    diagnosis?: boolean;
    treatment?: boolean;
    prescription?: boolean;
    vitals?: boolean;
    notes?: boolean;
    visitDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VisitLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clinicId" | "patientId" | "diagnosis" | "treatment" | "prescription" | "vitals" | "notes" | "visitDate" | "createdAt" | "updatedAt", ExtArgs["result"]["visitLog"]>;
export type VisitLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type VisitLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type VisitLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clinic?: boolean | Prisma.ClinicDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type $VisitLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VisitLog";
    objects: {
        clinic: Prisma.$ClinicPayload<ExtArgs>;
        patient: Prisma.$PatientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clinicId: string;
        patientId: string;
        diagnosis: string | null;
        treatment: string | null;
        prescription: string | null;
        vitals: runtime.JsonValue | null;
        notes: string | null;
        visitDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["visitLog"]>;
    composites: {};
};
export type VisitLogGetPayload<S extends boolean | null | undefined | VisitLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisitLogPayload, S>;
export type VisitLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisitLogCountAggregateInputType | true;
};
export interface VisitLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VisitLog'];
        meta: {
            name: 'VisitLog';
        };
    };
    findUnique<T extends VisitLogFindUniqueArgs>(args: Prisma.SelectSubset<T, VisitLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisitLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisitLogFindFirstArgs>(args?: Prisma.SelectSubset<T, VisitLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisitLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisitLogFindManyArgs>(args?: Prisma.SelectSubset<T, VisitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisitLogCreateArgs>(args: Prisma.SelectSubset<T, VisitLogCreateArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisitLogCreateManyArgs>(args?: Prisma.SelectSubset<T, VisitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VisitLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VisitLogDeleteArgs>(args: Prisma.SelectSubset<T, VisitLogDeleteArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisitLogUpdateArgs>(args: Prisma.SelectSubset<T, VisitLogUpdateArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisitLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisitLogUpdateManyArgs>(args: Prisma.SelectSubset<T, VisitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VisitLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VisitLogUpsertArgs>(args: Prisma.SelectSubset<T, VisitLogUpsertArgs<ExtArgs>>): Prisma.Prisma__VisitLogClient<runtime.Types.Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisitLogCountArgs>(args?: Prisma.Subset<T, VisitLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisitLogCountAggregateOutputType> : number>;
    aggregate<T extends VisitLogAggregateArgs>(args: Prisma.Subset<T, VisitLogAggregateArgs>): Prisma.PrismaPromise<GetVisitLogAggregateType<T>>;
    groupBy<T extends VisitLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisitLogGroupByArgs['orderBy'];
    } : {
        orderBy?: VisitLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisitLogFieldRefs;
}
export interface Prisma__VisitLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clinic<T extends Prisma.ClinicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicClient<runtime.Types.Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisitLogFieldRefs {
    readonly id: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly clinicId: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly patientId: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly diagnosis: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly treatment: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly prescription: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly vitals: Prisma.FieldRef<"VisitLog", 'Json'>;
    readonly notes: Prisma.FieldRef<"VisitLog", 'String'>;
    readonly visitDate: Prisma.FieldRef<"VisitLog", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"VisitLog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VisitLog", 'DateTime'>;
}
export type VisitLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    where: Prisma.VisitLogWhereUniqueInput;
};
export type VisitLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    where: Prisma.VisitLogWhereUniqueInput;
};
export type VisitLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisitLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisitLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VisitLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitLogCreateInput, Prisma.VisitLogUncheckedCreateInput>;
};
export type VisitLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisitLogCreateManyInput | Prisma.VisitLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisitLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    data: Prisma.VisitLogCreateManyInput | Prisma.VisitLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VisitLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VisitLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitLogUpdateInput, Prisma.VisitLogUncheckedUpdateInput>;
    where: Prisma.VisitLogWhereUniqueInput;
};
export type VisitLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisitLogUpdateManyMutationInput, Prisma.VisitLogUncheckedUpdateManyInput>;
    where?: Prisma.VisitLogWhereInput;
    limit?: number;
};
export type VisitLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitLogUpdateManyMutationInput, Prisma.VisitLogUncheckedUpdateManyInput>;
    where?: Prisma.VisitLogWhereInput;
    limit?: number;
    include?: Prisma.VisitLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VisitLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    where: Prisma.VisitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitLogCreateInput, Prisma.VisitLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisitLogUpdateInput, Prisma.VisitLogUncheckedUpdateInput>;
};
export type VisitLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
    where: Prisma.VisitLogWhereUniqueInput;
};
export type VisitLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitLogWhereInput;
    limit?: number;
};
export type VisitLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitLogSelect<ExtArgs> | null;
    omit?: Prisma.VisitLogOmit<ExtArgs> | null;
    include?: Prisma.VisitLogInclude<ExtArgs> | null;
};
export {};
