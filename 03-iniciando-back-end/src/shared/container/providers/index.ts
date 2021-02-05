import { container } from 'tsyringe';

import IStorageProvider from './StoregeProvider/models/IStorageProvider';
import DiskStorageProvider from './StoregeProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
