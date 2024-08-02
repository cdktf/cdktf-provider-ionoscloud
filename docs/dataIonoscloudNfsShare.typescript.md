# `dataIonoscloudNfsShare` Submodule <a name="`dataIonoscloudNfsShare` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudNfsShare <a name="DataIonoscloudNfsShare" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share ionoscloud_nfs_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

new dataIonoscloudNfsShare.DataIonoscloudNfsShare(scope: Construct, id: string, config: DataIonoscloudNfsShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig">DataIonoscloudNfsShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig">DataIonoscloudNfsShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups">putClientGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups">resetClientGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid">resetUid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClientGroups` <a name="putClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups"></a>

```typescript
public putClientGroups(value: IResolvable | DataIonoscloudNfsShareClientGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]

---

##### `resetClientGroups` <a name="resetClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups"></a>

```typescript
public resetClientGroups(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch"></a>

```typescript
public resetPartialMatch(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid"></a>

```typescript
public resetUid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudNfsShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudNfsShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudNfsShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups">clientGroups</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath">nfsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput">clientGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput">gidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput">partialMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput">quotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput">uidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota">quota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid">uid</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientGroups`<sup>Required</sup> <a name="clientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups"></a>

```typescript
public readonly clientGroups: DataIonoscloudNfsShareClientGroupsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a>

---

##### `nfsPath`<sup>Required</sup> <a name="nfsPath" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath"></a>

```typescript
public readonly nfsPath: string;
```

- *Type:* string

---

##### `clientGroupsInput`<sup>Optional</sup> <a name="clientGroupsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput"></a>

```typescript
public readonly clientGroupsInput: IResolvable | DataIonoscloudNfsShareClientGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput"></a>

```typescript
public readonly gidInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput"></a>

```typescript
public readonly partialMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput"></a>

```typescript
public readonly quotaInput: number;
```

- *Type:* number

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput"></a>

```typescript
public readonly uidInput: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota"></a>

```typescript
public readonly quota: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudNfsShareClientGroups <a name="DataIonoscloudNfsShareClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

const dataIonoscloudNfsShareClientGroups: dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description">description</a></code> | <code>string</code> | Optional description for the clients groups. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts">hosts</a></code> | <code>string[]</code> | A singular host allowed to connect to the share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks">ipNetworks</a></code> | <code>string[]</code> | The allowed host or network to which the export is being shared. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs">nfs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]</code> | nfs block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description for the clients groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#description DataIonoscloudNfsShare#description}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

A singular host allowed to connect to the share.

The host can be specified as IP address and can be either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#hosts DataIonoscloudNfsShare#hosts}

---

##### `ipNetworks`<sup>Optional</sup> <a name="ipNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks"></a>

```typescript
public readonly ipNetworks: string[];
```

- *Type:* string[]

The allowed host or network to which the export is being shared.

The IP address can be either IPv4 or IPv6 and has to be given with CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#ip_networks DataIonoscloudNfsShare#ip_networks}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs"></a>

```typescript
public readonly nfs: IResolvable | DataIonoscloudNfsShareClientGroupsNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#nfs DataIonoscloudNfsShare#nfs}

---

### DataIonoscloudNfsShareClientGroupsNfs <a name="DataIonoscloudNfsShareClientGroupsNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

const dataIonoscloudNfsShareClientGroupsNfs: dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash">squash</a></code> | <code>string</code> | The squash mode for the export. |

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

The squash mode for the export.

The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#squash DataIonoscloudNfsShare#squash}

---

### DataIonoscloudNfsShareConfig <a name="DataIonoscloudNfsShareConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

const dataIonoscloudNfsShareConfig: dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location">location</a></code> | <code>string</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups">clientGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]</code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid">gid</a></code> | <code>number</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id">id</a></code> | <code>string</code> | The ID of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name">name</a></code> | <code>string</code> | The name of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether partial matching is allowed or not when using the name filter. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota">quota</a></code> | <code>number</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid">uid</a></code> | <code>number</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}

---

##### `clientGroups`<sup>Optional</sup> <a name="clientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups"></a>

```typescript
public readonly clientGroups: IResolvable | DataIonoscloudNfsShareClientGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota"></a>

```typescript
public readonly quota: number;
```

- *Type:* number

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudNfsShareClientGroupsList <a name="DataIonoscloudNfsShareClientGroupsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

new dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get"></a>

```typescript
public get(index: number): DataIonoscloudNfsShareClientGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudNfsShareClientGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>[]

---


### DataIonoscloudNfsShareClientGroupsNfsList <a name="DataIonoscloudNfsShareClientGroupsNfsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

new dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get"></a>

```typescript
public get(index: number): DataIonoscloudNfsShareClientGroupsNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudNfsShareClientGroupsNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]

---


### DataIonoscloudNfsShareClientGroupsNfsOutputReference <a name="DataIonoscloudNfsShareClientGroupsNfsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

new dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash">resetSquash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSquash` <a name="resetSquash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash"></a>

```typescript
public resetSquash(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput">squashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash">squash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput"></a>

```typescript
public readonly squashInput: string;
```

- *Type:* string

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudNfsShareClientGroupsNfs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>

---


### DataIonoscloudNfsShareClientGroupsOutputReference <a name="DataIonoscloudNfsShareClientGroupsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudNfsShare } from '@cdktf/provider-ionoscloud'

new dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks">resetIpNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs">resetNfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfs` <a name="putNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs"></a>

```typescript
public putNfs(value: IResolvable | DataIonoscloudNfsShareClientGroupsNfs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetIpNetworks` <a name="resetIpNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks"></a>

```typescript
public resetIpNetworks(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput">ipNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput">nfsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks">ipNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs"></a>

```typescript
public readonly nfs: DataIonoscloudNfsShareClientGroupsNfsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `ipNetworksInput`<sup>Optional</sup> <a name="ipNetworksInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput"></a>

```typescript
public readonly ipNetworksInput: string[];
```

- *Type:* string[]

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: IResolvable | DataIonoscloudNfsShareClientGroupsNfs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `ipNetworks`<sup>Required</sup> <a name="ipNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks"></a>

```typescript
public readonly ipNetworks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudNfsShareClientGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>

---



