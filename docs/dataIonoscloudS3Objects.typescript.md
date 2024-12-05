# `dataIonoscloudS3Objects` Submodule <a name="`dataIonoscloudS3Objects` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3Objects <a name="DataIonoscloudS3Objects" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects ionoscloud_s3_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

new dataIonoscloudS3Objects.DataIonoscloudS3Objects(scope: Construct, id: string, config: DataIonoscloudS3ObjectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner">resetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys">resetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter">resetStartAfter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType"></a>

```typescript
public resetEncodingType(): void
```

##### `resetFetchOwner` <a name="resetFetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner"></a>

```typescript
public resetFetchOwner(): void
```

##### `resetMaxKeys` <a name="resetMaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys"></a>

```typescript
public resetMaxKeys(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter"></a>

```typescript
public resetStartAfter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudS3Objects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudS3Objects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3Objects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes">commonPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput">encodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput">fetchOwnerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput">maxKeysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput">startAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType">encodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner">fetchOwner</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys">maxKeys</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter">startAfter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `commonPrefixes`<sup>Required</sup> <a name="commonPrefixes" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes"></a>

```typescript
public readonly commonPrefixes: string[];
```

- *Type:* string[]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput"></a>

```typescript
public readonly encodingTypeInput: string;
```

- *Type:* string

---

##### `fetchOwnerInput`<sup>Optional</sup> <a name="fetchOwnerInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput"></a>

```typescript
public readonly fetchOwnerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxKeysInput`<sup>Optional</sup> <a name="maxKeysInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput"></a>

```typescript
public readonly maxKeysInput: number;
```

- *Type:* number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput"></a>

```typescript
public readonly startAfterInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

---

##### `fetchOwner`<sup>Required</sup> <a name="fetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner"></a>

```typescript
public readonly fetchOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxKeys`<sup>Required</sup> <a name="maxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys"></a>

```typescript
public readonly maxKeys: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter"></a>

```typescript
public readonly startAfter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3ObjectsConfig <a name="DataIonoscloudS3ObjectsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.Initializer"></a>

```typescript
import { dataIonoscloudS3Objects } from '@cdktf/provider-ionoscloud'

const dataIonoscloudS3ObjectsConfig: dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType">encodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner">fetchOwner</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys">maxKeys</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter">startAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}.

---

##### `fetchOwner`<sup>Optional</sup> <a name="fetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner"></a>

```typescript
public readonly fetchOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}.

---

##### `maxKeys`<sup>Optional</sup> <a name="maxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys"></a>

```typescript
public readonly maxKeys: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}.

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter"></a>

```typescript
public readonly startAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}.

---



