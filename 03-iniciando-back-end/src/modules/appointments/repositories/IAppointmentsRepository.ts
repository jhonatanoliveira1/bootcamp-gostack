import Appointments from '../infra/typeorm/entities/Appointments';

export default interface IAppointmentsRepository {
  findByDate(data: Date): Promise<Appointments | undefined>;
}
