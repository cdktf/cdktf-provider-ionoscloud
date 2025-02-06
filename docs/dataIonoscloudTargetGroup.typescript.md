# `dataIonoscloudTargetGroup` Submodule <a name="`dataIonoscloudTargetGroup` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudTargetGroup <a name="DataIonoscloudTargetGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group ionoscloud_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroup(scope: Construct, id: string, config?: DataIonoscloudTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig">DataIonoscloudTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig">DataIonoscloudTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudTargetGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetPartialMatch"></a>

```typescript
public resetPartialMatch(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isConstruct"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformElement"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList">DataIonoscloudTargetGroupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList">DataIonoscloudTargetGroupHttpHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList">DataIonoscloudTargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference">DataIonoscloudTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.partialMatchInput">partialMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.healthCheck"></a>

```typescript
public readonly healthCheck: DataIonoscloudTargetGroupHealthCheckList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList">DataIonoscloudTargetGroupHealthCheckList</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: DataIonoscloudTargetGroupHttpHealthCheckList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList">DataIonoscloudTargetGroupHttpHealthCheckList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.targets"></a>

```typescript
public readonly targets: DataIonoscloudTargetGroupTargetsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList">DataIonoscloudTargetGroupTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudTargetGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference">DataIonoscloudTargetGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.partialMatchInput"></a>

```typescript
public readonly partialMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudTargetGroupConfig <a name="DataIonoscloudTargetGroupConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

const dataIonoscloudTargetGroupConfig: dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#id DataIonoscloudTargetGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#id DataIonoscloudTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#name DataIonoscloudTargetGroup#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#partial_match DataIonoscloudTargetGroup#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudTargetGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#timeouts DataIonoscloudTargetGroup#timeouts}

---

### DataIonoscloudTargetGroupHealthCheck <a name="DataIonoscloudTargetGroupHealthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheck.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

const dataIonoscloudTargetGroupHealthCheck: dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheck = { ... }
```


### DataIonoscloudTargetGroupHttpHealthCheck <a name="DataIonoscloudTargetGroupHttpHealthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheck.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

const dataIonoscloudTargetGroupHttpHealthCheck: dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheck = { ... }
```


### DataIonoscloudTargetGroupTargets <a name="DataIonoscloudTargetGroupTargets" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargets.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

const dataIonoscloudTargetGroupTargets: dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargets = { ... }
```


### DataIonoscloudTargetGroupTimeouts <a name="DataIonoscloudTargetGroupTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

const dataIonoscloudTargetGroupTimeouts: dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#create DataIonoscloudTargetGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#default DataIonoscloudTargetGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#delete DataIonoscloudTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#update DataIonoscloudTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#create DataIonoscloudTargetGroup#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#default DataIonoscloudTargetGroup#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#delete DataIonoscloudTargetGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/target_group#update DataIonoscloudTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudTargetGroupHealthCheckList <a name="DataIonoscloudTargetGroupHealthCheckList" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.get"></a>

```typescript
public get(index: number): DataIonoscloudTargetGroupHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudTargetGroupHealthCheckOutputReference <a name="DataIonoscloudTargetGroupHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.checkInterval">checkInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.checkTimeout">checkTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheck">DataIonoscloudTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkInterval`<sup>Required</sup> <a name="checkInterval" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.checkInterval"></a>

```typescript
public readonly checkInterval: number;
```

- *Type:* number

---

##### `checkTimeout`<sup>Required</sup> <a name="checkTimeout" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.checkTimeout"></a>

```typescript
public readonly checkTimeout: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHealthCheck">DataIonoscloudTargetGroupHealthCheck</a>

---


### DataIonoscloudTargetGroupHttpHealthCheckList <a name="DataIonoscloudTargetGroupHttpHealthCheckList" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.get"></a>

```typescript
public get(index: number): DataIonoscloudTargetGroupHttpHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudTargetGroupHttpHealthCheckOutputReference <a name="DataIonoscloudTargetGroupHttpHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.negate">negate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.regex">regex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheck">DataIonoscloudTargetGroupHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.negate"></a>

```typescript
public readonly negate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.regex"></a>

```typescript
public readonly regex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudTargetGroupHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupHttpHealthCheck">DataIonoscloudTargetGroupHttpHealthCheck</a>

---


### DataIonoscloudTargetGroupTargetsList <a name="DataIonoscloudTargetGroupTargetsList" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.get"></a>

```typescript
public get(index: number): DataIonoscloudTargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudTargetGroupTargetsOutputReference <a name="DataIonoscloudTargetGroupTargetsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.maintenanceEnabled">maintenanceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.proxyProtocol">proxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargets">DataIonoscloudTargetGroupTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckEnabled`<sup>Required</sup> <a name="healthCheckEnabled" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.healthCheckEnabled"></a>

```typescript
public readonly healthCheckEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `maintenanceEnabled`<sup>Required</sup> <a name="maintenanceEnabled" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.maintenanceEnabled"></a>

```typescript
public readonly maintenanceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.proxyProtocol"></a>

```typescript
public readonly proxyProtocol: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudTargetGroupTargets;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTargets">DataIonoscloudTargetGroupTargets</a>

---


### DataIonoscloudTargetGroupTimeoutsOutputReference <a name="DataIonoscloudTargetGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudTargetGroup } from '@cdktf/provider-ionoscloud'

new dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudTargetGroup.DataIonoscloudTargetGroupTimeouts">DataIonoscloudTargetGroupTimeouts</a>

---



