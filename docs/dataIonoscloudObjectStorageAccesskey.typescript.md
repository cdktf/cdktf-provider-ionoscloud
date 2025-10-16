# `dataIonoscloudObjectStorageAccesskey` Submodule <a name="`dataIonoscloudObjectStorageAccesskey` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudObjectStorageAccesskey <a name="DataIonoscloudObjectStorageAccesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/data-sources/object_storage_accesskey ionoscloud_object_storage_accesskey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

new dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey(scope: Construct, id: string, config?: DataIonoscloudObjectStorageAccesskeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig">DataIonoscloudObjectStorageAccesskeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig">DataIonoscloudObjectStorageAccesskeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetAccesskey">resetAccesskey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccesskey` <a name="resetAccesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetAccesskey"></a>

```typescript
public resetAccesskey(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudObjectStorageAccesskey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudObjectStorageAccesskey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudObjectStorageAccesskey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudObjectStorageAccesskey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/data-sources/object_storage_accesskey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudObjectStorageAccesskey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.canonicalUserId">canonicalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.contractUserId">contractUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskeyInput">accesskeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskey">accesskey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `canonicalUserId`<sup>Required</sup> <a name="canonicalUserId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.canonicalUserId"></a>

```typescript
public readonly canonicalUserId: string;
```

- *Type:* string

---

##### `contractUserId`<sup>Required</sup> <a name="contractUserId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.contractUserId"></a>

```typescript
public readonly contractUserId: string;
```

- *Type:* string

---

##### `accesskeyInput`<sup>Optional</sup> <a name="accesskeyInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskeyInput"></a>

```typescript
public readonly accesskeyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accesskey`<sup>Required</sup> <a name="accesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskey"></a>

```typescript
public readonly accesskey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudObjectStorageAccesskeyConfig <a name="DataIonoscloudObjectStorageAccesskeyConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageAccesskey } from '@cdktf/provider-ionoscloud'

const dataIonoscloudObjectStorageAccesskeyConfig: dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.accesskey">accesskey</a></code> | <code>string</code> | Access key metadata is a string of 92 characters. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.description">description</a></code> | <code>string</code> | Description of the Access key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.id">id</a></code> | <code>string</code> | The ID (UUID) of the AccessKey. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accesskey`<sup>Optional</sup> <a name="accesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.accesskey"></a>

```typescript
public readonly accesskey: string;
```

- *Type:* string

Access key metadata is a string of 92 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/data-sources/object_storage_accesskey#accesskey DataIonoscloudObjectStorageAccesskey#accesskey}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/data-sources/object_storage_accesskey#description DataIonoscloudObjectStorageAccesskey#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID (UUID) of the AccessKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/data-sources/object_storage_accesskey#id DataIonoscloudObjectStorageAccesskey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



