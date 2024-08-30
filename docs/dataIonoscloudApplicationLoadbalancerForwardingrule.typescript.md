# `dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule <a name="`dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingrule <a name="DataIonoscloudApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule(scope: Construct, id: string, config: DataIonoscloudApplicationLoadbalancerForwardingruleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig">DataIonoscloudApplicationLoadbalancerForwardingruleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig">DataIonoscloudApplicationLoadbalancerForwardingruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch"></a>

```typescript
public resetPartialMatch(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudApplicationLoadbalancerForwardingrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudApplicationLoadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudApplicationLoadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules">httpRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp">listenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates">serverCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">applicationLoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput">partialMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

---

##### `httpRules`<sup>Required</sup> <a name="httpRules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```typescript
public readonly httpRules: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `listenerIp`<sup>Required</sup> <a name="listenerIp" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```typescript
public readonly listenerIp: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `applicationLoadbalancerIdInput`<sup>Optional</sup> <a name="applicationLoadbalancerIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```typescript
public readonly applicationLoadbalancerIdInput: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput"></a>

```typescript
public readonly partialMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```typescript
public readonly applicationLoadbalancerId: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleConfig <a name="DataIonoscloudApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const dataIonoscloudApplicationLoadbalancerForwardingruleConfig: dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name">name</a></code> | <code>string</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```typescript
public readonly applicationLoadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}

---

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const dataIonoscloudApplicationLoadbalancerForwardingruleHttpRules: dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules = { ... }
```


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const dataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions: dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions = { ... }
```


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const dataIonoscloudApplicationLoadbalancerForwardingruleTimeouts: dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```typescript
public get(index: number): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">negate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```typescript
public readonly negate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```typescript
public get(index: number): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">dropQuery</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">responseMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">targetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `dropQuery`<sup>Required</sup> <a name="dropQuery" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```typescript
public readonly dropQuery: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `responseMessage`<sup>Required</sup> <a name="responseMessage" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```typescript
public readonly responseMessage: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudApplicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

---



