import { serve } from '@triframe/arbiter'
import { seed } from './seed'
import path from 'path'

serve(path.resolve(__dirname, './models'), {
    session: {}
}).then(seed)