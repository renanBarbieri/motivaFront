
export interface Mapper<T, U>{
    toEntity(other: U): T;
    toOther(entity: T): U;
}