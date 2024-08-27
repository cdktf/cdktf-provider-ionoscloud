# `dataIonoscloudInmemorydbSnapshot` Submodule <a name="`dataIonoscloudInmemorydbSnapshot` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudInmemorydbSnapshot <a name="DataIonoscloudInmemorydbSnapshot" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot ionoscloud_inmemorydb_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot(scope: Construct, id: string, config: DataIonoscloudInmemorydbSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig">DataIonoscloudInmemorydbSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig">DataIonoscloudInmemorydbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudInmemorydbSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudInmemorydbSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isConstruct"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformElement"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudInmemorydbSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudInmemorydbSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudInmemorydbSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudInmemorydbSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList">DataIonoscloudInmemorydbSnapshotMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference">DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.location">location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.metadata"></a>

```typescript
public readonly metadata: DataIonoscloudInmemorydbSnapshotMetadataList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList">DataIonoscloudInmemorydbSnapshotMetadataList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference">DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudInmemorydbSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudInmemorydbSnapshotConfig <a name="DataIonoscloudInmemorydbSnapshotConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbSnapshotConfig: dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.id">id</a></code> | <code>string</code> | The ID of the snapshot. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.location">location</a></code> | <code>string</code> | The location of the snapshot. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#id DataIonoscloudInmemorydbSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#location DataIonoscloudInmemorydbSnapshot#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudInmemorydbSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#timeouts DataIonoscloudInmemorydbSnapshot#timeouts}

---

### DataIonoscloudInmemorydbSnapshotMetadata <a name="DataIonoscloudInmemorydbSnapshotMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadata.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbSnapshotMetadata: dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadata = { ... }
```


### DataIonoscloudInmemorydbSnapshotTimeouts <a name="DataIonoscloudInmemorydbSnapshotTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbSnapshotTimeouts: dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#create DataIonoscloudInmemorydbSnapshot#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#default DataIonoscloudInmemorydbSnapshot#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#delete DataIonoscloudInmemorydbSnapshot#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#update DataIonoscloudInmemorydbSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#create DataIonoscloudInmemorydbSnapshot#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#default DataIonoscloudInmemorydbSnapshot#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#delete DataIonoscloudInmemorydbSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/data-sources/inmemorydb_snapshot#update DataIonoscloudInmemorydbSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudInmemorydbSnapshotMetadataList <a name="DataIonoscloudInmemorydbSnapshotMetadataList" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.get"></a>

```typescript
public get(index: number): DataIonoscloudInmemorydbSnapshotMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudInmemorydbSnapshotMetadataOutputReference <a name="DataIonoscloudInmemorydbSnapshotMetadataOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.replicaSetId">replicaSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.snapshotTime">snapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadata">DataIonoscloudInmemorydbSnapshotMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `replicaSetId`<sup>Required</sup> <a name="replicaSetId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.replicaSetId"></a>

```typescript
public readonly replicaSetId: string;
```

- *Type:* string

---

##### `snapshotTime`<sup>Required</sup> <a name="snapshotTime" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.snapshotTime"></a>

```typescript
public readonly snapshotTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudInmemorydbSnapshotMetadata;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotMetadata">DataIonoscloudInmemorydbSnapshotMetadata</a>

---


### DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference <a name="DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbSnapshot } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudInmemorydbSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbSnapshot.DataIonoscloudInmemorydbSnapshotTimeouts">DataIonoscloudInmemorydbSnapshotTimeouts</a>

---



