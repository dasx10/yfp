export default function over <Key extends PropertyKey>(key: Key): <Return, Value>(call: (value: Value) => Return) => <Target extends Recrod<PropertyKey, any>>(target: Target & Record<Key, Value>) => Omit<Target, Key> & { [K in Key]: Return };