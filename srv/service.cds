using db as data from '../db/schema';

service MyService {



          @Common.SideEffects : 
            {
                SourceProperties :
                [
                    'num1','num2'
                ],
                TargetProperties : [
                     'result'
                ],
            }
    @odata.draft.enabled
    entity add_t as projection on data.add;

}