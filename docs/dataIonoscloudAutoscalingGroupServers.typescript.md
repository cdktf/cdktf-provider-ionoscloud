# `dataIonoscloudAutoscalingGroupServers` Submodule <a name="`dataIonoscloudAutoscalingGroupServers` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudAutoscalingGroupServers <a name="DataIonoscloudAutoscalingGroupServers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/autoscaling_group_servers ionoscloud_autoscaling_group_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

new dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers(scope: Construct, id: string, config: DataIonoscloudAutoscalingGroupServersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig">DataIonoscloudAutoscalingGroupServersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig">DataIonoscloudAutoscalingGroupServersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudAutoscalingGroupServers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudAutoscalingGroupServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudAutoscalingGroupServers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudAutoscalingGroupServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/autoscaling_group_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudAutoscalingGroupServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList">DataIonoscloudAutoscalingGroupServersServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.servers"></a>

```typescript
public readonly servers: DataIonoscloudAutoscalingGroupServersServersList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList">DataIonoscloudAutoscalingGroupServersServersList</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudAutoscalingGroupServersConfig <a name="DataIonoscloudAutoscalingGroupServersConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.Initializer"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

const dataIonoscloudAutoscalingGroupServersConfig: dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.groupId">groupId</a></code> | <code>string</code> | Unique identifier for the group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/autoscaling_group_servers#group_id DataIonoscloudAutoscalingGroupServers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataIonoscloudAutoscalingGroupServersServers <a name="DataIonoscloudAutoscalingGroupServersServers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers.Initializer"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

const dataIonoscloudAutoscalingGroupServersServers: dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudAutoscalingGroupServersServersList <a name="DataIonoscloudAutoscalingGroupServersServersList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

new dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get"></a>

```typescript
public get(index: number): DataIonoscloudAutoscalingGroupServersServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupServersServersOutputReference <a name="DataIonoscloudAutoscalingGroupServersServersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudAutoscalingGroupServers } from '@cdktf/provider-ionoscloud'

new dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers">DataIonoscloudAutoscalingGroupServersServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudAutoscalingGroupServersServers;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers">DataIonoscloudAutoscalingGroupServersServers</a>

---



