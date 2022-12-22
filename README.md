# JavaScript
JavaScript objects are composite values: they are a collection of properties or named values.
Strings are not objects, though, so why do they have properties? Whenever you try to refer to a property of a string s, JavaScript converts the string value to an object as if by calling new String(s). This object inherits (see §6.2.2) string methods and is used to resolve the property reference. Once the property has been resolved, the newly created object is discarded.
Numbers and booleans have methods for the same reason that strings do: a temporary object is created using the Number() or Boolean() constructor, and the method is resolved using that temporary object.
There are not wrapper objects for the null and undefined values: any attempt to access a property of one of these values causes a TypeError
